import { defineField, defineType } from "sanity";

const highlightIcons = [
  { title: "Target", value: "target" },
  { title: "Shield", value: "shield" },
  { title: "File", value: "file" },
  { title: "Clock", value: "clock" },
];

const serviceIcons = [
  { title: "Briefcase", value: "briefcase" },
  { title: "Users", value: "users" },
  { title: "Shield", value: "shield" },
  { title: "Compass", value: "compass" },
  { title: "Award", value: "award" },
  { title: "Sparkles", value: "sparkles" },
];

const textField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "string",
    validation: (rule) => rule.required(),
  });

export const siteContent = defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  fields: [
    defineField({
      name: "home",
      title: "Home Page",
      type: "object",
      fields: [
        textField("eyebrow", "Small Label"),
        textField("headline", "Headline"),
        textField("accent", "Headline Accent"),
        defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 2 }),
        textField("ctaLabel", "Button Label"),
        textField("visualChip", "Visual Section Label"),
        textField("visualTitle", "Visual Section Title"),
        defineField({
          name: "highlights",
          title: "Highlights",
          type: "array",
          of: [
            defineField({
              name: "highlight",
              type: "object",
              fields: [
                textField("title", "Title"),
                textField("subtitle", "Subtitle"),
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  options: { list: highlightIcons },
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "expertise",
          title: "Core Expertise",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About Page",
      type: "object",
      fields: [
        textField("headline", "Headline"),
        textField("accent", "Headline Accent"),
        defineField({ name: "introQuote", title: "Intro Quote", type: "text", rows: 5 }),
        textField("beliefTitle", "Belief Title"),
        defineField({ name: "beliefText", title: "Belief Text", type: "text", rows: 3 }),
        textField("missionTitle", "Mission Title"),
        defineField({ name: "missionText", title: "Mission Text", type: "text", rows: 3 }),
        textField("mentorsTitle", "Mentors Section Title"),
        defineField({
          name: "mentors",
          title: "Mentors",
          type: "array",
          of: [
            defineField({
              name: "mentor",
              type: "object",
              fields: [
                textField("name", "Name"),
                textField("role", "Role"),
                defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
                textField("image", "Image URL"),
              ],
            }),
          ],
        }),
        textField("quote", "Bottom Quote"),
        textField("quoteAuthor", "Quote Author"),
        textField("quoteRole", "Quote Author Role"),
      ],
    }),
    defineField({
      name: "services",
      title: "Services Page",
      type: "object",
      fields: [
        textField("headline", "Headline"),
        defineField({
          name: "services",
          title: "Services",
          type: "array",
          of: [
            defineField({
              name: "service",
              type: "object",
              fields: [
                textField("title", "Title"),
                defineField({ name: "desc", title: "Description", type: "text", rows: 3 }),
                defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  options: { list: serviceIcons },
                }),
              ],
            }),
          ],
        }),
        textField("partnersTitle", "Partners Section Title"),
        defineField({
          name: "partners",
          title: "Partners",
          type: "array",
          of: [
            defineField({
              name: "partner",
              type: "object",
              fields: [textField("name", "Name"), textField("logo", "Logo URL")],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Page",
      type: "object",
      fields: [
        textField("headline", "Headline"),
        textField("cardTitle", "Card Title"),
        textField("phone", "Phone"),
        textField("email", "Email"),
        textField("location", "Location"),
        textField("whatsapp", "WhatsApp Number"),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Website Content" }),
  },
});
