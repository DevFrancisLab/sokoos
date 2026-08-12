"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image } from "lucide-react";

export type SidebarUser = { id: string; name: string; email?: string; avatarUrl?: string };

export type EditProfileValues = {
  name: string;
  email: string;
};

type EditProfileDialogProps = {
  user: SidebarUser;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (values: SidebarUser) => void | Promise<void>;
};

export default function EditProfileDialog({ user, open, onOpenChange, onSave }: EditProfileDialogProps) {
  const form = useForm<EditProfileValues>({
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
    },
    mode: "onChange",
  });

  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(user.avatarUrl);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const isSubmittingRef = useRef(false);

  useEffect(() => {
    form.reset({ name: user.name || "", email: user.email || "" });
    setAvatarPreview(user.avatarUrl);
    setSelectedFile(null);
    setPhotoError(null);
  }, [user, form]);

  useEffect(() => {
    return () => {
      if (selectedFile && avatarPreview && avatarPreview.startsWith("blob:")) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [selectedFile, avatarPreview]);

  const onFileChange = (file?: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (selectedFile && avatarPreview && avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }
    setSelectedFile(file);
    setAvatarPreview(url);
    setPhotoError(null);
  };

  const resetPhotoChange = () => {
    if (selectedFile && avatarPreview?.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }
    setSelectedFile(null);
    setAvatarPreview(user.avatarUrl);
    setPhotoError(null);
  };

  const resetUnsavedChanges = () => {
    form.reset({ name: user.name || "", email: user.email || "" });
    resetPhotoChange();
  };

  const handleFileSelection = (file?: File) => {
    if (!file) return;

    const supportedTypes = ["image/png", "image/jpeg", "image/svg+xml"];
    if (!supportedTypes.includes(file.type)) {
      setPhotoError("Choose a PNG, JPG, or SVG image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setPhotoError("Choose an image smaller than 5MB.");
      return;
    }

    onFileChange(file);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      if (isSaving) return;
      resetUnsavedChanges();
    }
    onOpenChange(nextOpen);
  };

  const onSubmit = async (values: EditProfileValues) => {
    if (isSubmittingRef.current) return;

    isSubmittingRef.current = true;
    setIsSaving(true);
    try {
      await onSave({
        id: user.id,
        name: values.name.trim(),
        email: values.email.trim(),
        avatarUrl: avatarPreview,
      });
      onOpenChange(false);
    } finally {
      isSubmittingRef.current = false;
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-xl rounded-[24px] border-[#E5E7EB] p-6 sm:p-7">
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Update your personal account information.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <section aria-label="Profile photo" className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFC] p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Avatar className="h-20 w-20 shrink-0 rounded-full bg-white text-[#111827] shadow-sm">
                  {avatarPreview ? (
                    <AvatarImage src={avatarPreview} alt={`${user.name}'s profile photo`} />
                  ) : (
                    <AvatarFallback>{user.name
                      .trim()
                      .split(/\s+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((segment) => segment[0])
                      .join("")
                      .toUpperCase()}</AvatarFallback>
                  )}
                </Avatar>
                <div className="min-w-0 space-y-2">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-[#111827] shadow-sm transition hover:bg-[#F3F4F6] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#22C55E] focus-within:ring-offset-2 focus-within:ring-offset-[#F8FAFC]">
                    <Image className="h-4 w-4" />
                    Add photo
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/svg+xml"
                      className="hidden"
                      aria-describedby={photoError ? "profile-photo-error" : "profile-photo-help"}
                      aria-invalid={Boolean(photoError)}
                      onChange={(event) => {
                        handleFileSelection(event.target.files?.[0]);
                        event.target.value = "";
                      }}
                    />
                  </label>
                  <p id="profile-photo-help" className="text-sm text-[#64748B]">PNG, JPG or SVG · max 5MB</p>
                  {photoError ? <p id="profile-photo-error" role="alert" className="text-sm font-medium text-[#DC2626]">{photoError}</p> : null}
                </div>
              </div>
            </section>

            <div className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                rules={{ required: "Full name is required." }}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" type="email" {...field} />
                    </FormControl>
                    <FormDescription>Your email address is used for account notifications and account access.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
                rules={{
                  required: "Email address is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                }}
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-[#E5E7EB] pt-5 sm:flex-row sm:justify-end">
              <Button variant="secondary" type="button" onClick={() => handleOpenChange(false)} disabled={isSaving}>
                Cancel
              </Button>
              <Button type="submit" disabled={!form.formState.isValid || isSaving}>
                {isSaving ? "Saving..." : "Save changes"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
