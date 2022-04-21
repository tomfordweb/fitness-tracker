export const pushToDatalayer = (
  args: Record<string, string | number | boolean | undefined | null>
) => {
  ((window as any)?.dataLayer || []).push(args);
};
