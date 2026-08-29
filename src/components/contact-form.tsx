"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";

const schema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  subjek: z.string().min(3, "Subjek minimal 3 karakter"),
  pesan: z.string().min(10, "Pesan minimal 10 karakter"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    // Demo frontend: tidak ada pengiriman ke server.
    await new Promise((r) => setTimeout(r, 900));
    console.info("Pesan kontak (demo):", values);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 6000);
  };

  const fieldError = (name: keyof FormValues) =>
    errors[name] ? (
      <p className="text-xs font-medium text-red-600 dark:text-red-400">
        {errors[name]?.message}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="nama">Nama lengkap</Label>
          <Input id="nama" placeholder="Nama Anda" {...register("nama")} />
          {fieldError("nama")}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="nama@email.com"
            {...register("email")}
          />
          {fieldError("email")}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="subjek">Subjek</Label>
        <Input id="subjek" placeholder="Perihal pesan" {...register("subjek")} />
        {fieldError("subjek")}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="pesan">Pesan</Label>
        <Textarea
          id="pesan"
          rows={5}
          placeholder="Tuliskan pertanyaan atau aspirasi Anda…"
          {...register("pesan")}
        />
        {fieldError("pesan")}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
          Kirim Pesan
        </Button>
        {sent ? (
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <CheckCircle2 className="size-4" />
            Terima kasih, pesan Anda sudah kami terima (demo).
          </p>
        ) : null}
      </div>
      <p className="text-xs text-muted-foreground">
        Formulir ini masih tahap pengembangan frontend dan belum terhubung ke
        server — pesan tidak benar-benar terkirim.
      </p>
    </form>
  );
}
