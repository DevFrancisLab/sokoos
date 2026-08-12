"use client";

import { useEffect, useMemo, useState } from "react";
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
  onSave: (values: SidebarUser) => void;
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

  useEffect(() => {
    form.reset({ name: user.name || "", email: user.email || "" });
    setAvatarPreview(user.avatarUrl);
    setSelectedFile(null);
  }, [user, form]);

  useEffect(() => {
    return () => {
      if (selectedFile && avatarPreview && avatarPreview.startsWith("blob:")) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [selectedFile, avatarPreview]);

  const hasAvatar = Boolean(avatarPreview);

  const onFileChange = (file?: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (selectedFile && avatarPreview && avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }
    setSelectedFile(file);
    setAvatarPreview(url);
  };

  const removeAvatar = () => {
    if (selectedFile && avatarPreview && avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }
    setSelectedFile(null);
    setAvatarPreview(undefined);
  };

  const onSubmit = (values: EditProfileValues) => {
    onSave({
      id: user.id,
      name: values.name.trim(),
      email: values.email.trim(),
      avatarUrl: avatarPreview,
    });
    onOpenChange(false);
  };

  const avatarLabel = avatarPreview ? "Change photo" : "Add photo";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Update your profile photo, full name, and business email.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-[120px_1fr] sm:items-start">
              <div className="flex flex-col items-center gap-4 sm:items-start">
                <Avatar className="h-24 w-24 rounded-full bg-[#F8FAFC] text-[#111827]">
                  {avatarPreview ? (
                    <AvatarImage src={avatarPreview} alt={user.name} />
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
                <div className="flex flex-wrap items-center gap-2">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-[#111827] shadow-sm transition hover:bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                    <Image className="h-4 w-4" />
                    {avatarLabel}
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/svg+xml"
                      className="hidden"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (!file) return;
                        const supportedTypes = ["image/png", "image/jpeg", "image/svg+xml"];
                        if (!supportedTypes.includes(file.type)) {
                          return;
                        }
                        if (file.size > 5 * 1024 * 1024) {
                          return;
                        }
                        onFileChange(file);
                      }}
                    />
                  </label>
                  {hasAvatar ? (
                    <button
                      type="button"
                      onClick={removeAvatar}
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-[#111827] shadow-sm transition hover:bg-[#F3F4F6]"
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
                <p className="text-sm text-[#64748B]">PNG, JPG or SVG · max 5MB</p>
              </div>

              <div className="space-y-4">
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
                      <FormDescription>Your email address is used for account notifications.</FormDescription>
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
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button variant="secondary" type="button" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={!form.formState.isValid}>
                Save changes
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
