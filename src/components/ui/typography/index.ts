import { cva, type VariantProps } from "class-variance-authority";

export { default as Typography } from "./Typography.vue";

export const textVariants = cva("", {
  variants: {
    display: {
      "heading-xl":
        "scroll-m-20 tracking-tight text-4xl font-extrabold lg:text-5xl",
      "heading-lg":
        "scroll-m-20 tracking-tight text-3xl font-semibold first:mt-0",
      "heading-md": "scroll-m-20 tracking-tight text-2xl font-semibold",
      "heading-sm": "scroll-m-20 tracking-tight text-xl font-semibold",
      "body-lg": "text-lg font-semibold leading-7",
      "body-md": "leading-7",
      "body-sm": "text-sm font-medium leading-5",
      quote: "mt-6 border-l-2 pl-6",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      list: "my-4 ml-6 list-disc [&>li]:mt-2",
    },
  },
  defaultVariants: {
    display: "body-md",
  },
});

export type TextVariants = VariantProps<typeof textVariants>;
