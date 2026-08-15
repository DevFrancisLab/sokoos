"use client";

import { useEffect, useRef, useState, type DragEvent } from "react";
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

export type ProfileUpdate = SidebarUser & { avatarFile?: File | null };

type EditProfileDialogProps = {
  user: SidebarUser;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (values: ProfileUpdate) => void | Promise<void>;
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
  const [isDraggingPhoto, setIsDraggingPhoto] = useState(false);
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

    const supportedTypes = ["image/png", "image/jpeg"];
    if (!supportedTypes.includes(file.type)) {
      setPhotoError("Choose a PNG or JPG image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setPhotoError("Choose an image smaller than 5MB.");
      return;
    }

    onFileChange(file);
  };

  const handlePhotoDragOver = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const handlePhotoDrop = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDraggingPhoto(false);
    handleFileSelection(event.dataTransfer.files[0]);
  };

  const handlePhotoDragLeave = (event: DragEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsDraggingPhoto(false);
    }
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
        avatarFile: selectedFile,
      });
      onOpenChange(false);
    } catch (error) {
      form.setError("root", {
        message: error instanceof Error ? error.message : "Unable to save your profile. Please try again.",
      });
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
            <section
              aria-label="Profile photo"
              className={`rounded-[20px] border border-dashed bg-[#F8FAFC] p-4 transition-colors sm:p-5 ${isDraggingPhoto ? "border-[#22C55E] bg-[#F0FDF4]" : "border-[#E5E7EB]"}`}
              onDragEnter={(event) => {
                event.preventDefault();
                setIsDraggingPhoto(true);
              }}
              onDragOver={handlePhotoDragOver}
              onDragLeave={handlePhotoDragLeave}
              onDrop={handlePhotoDrop}
            >
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
                      accept="image/png,image/jpeg"
                      className="hidden"
                      aria-describedby={photoError ? "profile-photo-error" : "profile-photo-help"}
                      aria-invalid={Boolean(photoError)}
                      onChange={(event) => {
                        handleFileSelection(event.target.files?.[0]);
                        event.target.value = "";
                      }}
                    />
                  </label>
                  <p id="profile-photo-help" className="text-sm text-[#64748B]">PNG or JPG · max 5MB · or drag and drop here</p>
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
              {form.formState.errors.root?.message ? <p className="mr-auto text-sm text-[#B91C1C]" role="alert">{form.formState.errors.root.message}</p> : null}
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
