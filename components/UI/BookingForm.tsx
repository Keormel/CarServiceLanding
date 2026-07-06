"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/UI/Button";
import { useLanguage } from "@/components/UI/LanguageProvider";
import { cn } from "@/lib/utils";

interface BookingFormState {
  name: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  service: string;
  comment: string;
}

const initialState: BookingFormState = {
  name: "",
  phone: "",
  brand: "",
  model: "",
  year: "",
  service: "",
  comment: ""
};

type BookingErrors = Partial<Record<keyof BookingFormState, string>>;

const fieldBase =
  "focus-ring min-h-12 w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-white/[0.35] hover:border-white/[0.18] focus:border-signal";

export default function BookingForm() {
  const [form, setForm] = useState<BookingFormState>(initialState);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [success, setSuccess] = useState(false);
  const { dictionary } = useLanguage();
  const formText = dictionary.form;
  const serviceOptions = dictionary.services.items.map((service) => service.title);

  const updateField = (field: keyof BookingFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSuccess(false);
  };

  const validate = () => {
    const nextErrors: BookingErrors = {};
    const phoneDigits = form.phone.replace(/\D/g, "");
    const year = Number(form.year);
    const currentYear = new Date().getFullYear() + 1;

    if (form.name.trim().length < 2) {
      nextErrors.name = formText.errors.name;
    }
    if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      nextErrors.phone = formText.errors.phone;
    }
    if (form.brand.trim().length < 2) {
      nextErrors.brand = formText.errors.brand;
    }
    if (form.model.trim().length < 1) {
      nextErrors.model = formText.errors.model;
    }
    if (!Number.isInteger(year) || year < 1980 || year > currentYear) {
      nextErrors.year = `${formText.errors.year} ${currentYear}.`;
    }
    if (!form.service) {
      nextErrors.service = formText.errors.service;
    }
    if (form.comment.length > 500) {
      nextErrors.comment = formText.errors.comment;
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSuccess(true);
    setForm(initialState);
  };

  const errorText = (field: keyof BookingFormState) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-2 text-xs font-semibold text-red-300">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form
      id="booking"
      onSubmit={handleSubmit}
      className="glass-panel scroll-mt-28 rounded-lg p-5 sm:p-6 lg:p-8"
      noValidate
    >
      <div className="mb-7">
        <p className="text-sm font-bold uppercase text-signal">{formText.eyebrow}</p>
        <h3 className="mt-2 text-2xl font-black text-white">{formText.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/[0.62]">
          {formText.text}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/[0.82]">{formText.name}</span>
          <input
            className={fieldBase}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder={formText.namePlaceholder}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errorText("name")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/[0.82]">{formText.phone}</span>
          <input
            className={fieldBase}
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder={formText.phonePlaceholder}
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errorText("phone")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/[0.82]">
            {formText.brand}
          </span>
          <input
            className={fieldBase}
            value={form.brand}
            onChange={(event) => updateField("brand", event.target.value)}
            placeholder={formText.brandPlaceholder}
            autoComplete="organization"
            aria-invalid={Boolean(errors.brand)}
            aria-describedby={errors.brand ? "brand-error" : undefined}
          />
          {errorText("brand")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/[0.82]">{formText.model}</span>
          <input
            className={fieldBase}
            value={form.model}
            onChange={(event) => updateField("model", event.target.value)}
            placeholder={formText.modelPlaceholder}
            aria-invalid={Boolean(errors.model)}
            aria-describedby={errors.model ? "model-error" : undefined}
          />
          {errorText("model")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/[0.82]">
            {formText.year}
          </span>
          <input
            className={fieldBase}
            value={form.year}
            onChange={(event) => updateField("year", event.target.value)}
            placeholder="2021"
            inputMode="numeric"
            aria-invalid={Boolean(errors.year)}
            aria-describedby={errors.year ? "year-error" : undefined}
          />
          {errorText("year")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white/[0.82]">
            {formText.service}
          </span>
          <select
            className={cn(fieldBase, "appearance-none")}
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">{formText.service}</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errorText("service")}
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-semibold text-white/[0.82]">
          {formText.comment}
        </span>
        <textarea
          className={cn(fieldBase, "min-h-28 resize-y py-3")}
          value={form.comment}
          onChange={(event) => updateField("comment", event.target.value)}
          placeholder={formText.commentPlaceholder}
          aria-invalid={Boolean(errors.comment)}
          aria-describedby={errors.comment ? "comment-error" : undefined}
        />
        {errorText("comment")}
      </label>

      {success ? (
        <div
          className="mt-5 rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-100"
          role="status"
          aria-live="polite"
        >
          {formText.success}
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        icon={<Send className="h-4 w-4" aria-hidden="true" />}
      >
        {formText.submit}
      </Button>
    </form>
  );
}
