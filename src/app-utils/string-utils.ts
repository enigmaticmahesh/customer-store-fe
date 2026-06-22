export function formatPriceString(price: string) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(
        +price,
    );
};

export function getInitials(fullName: string = 'Unknown') {
    const names = fullName.split(' ')
    if (names.length < 2) {
        return names.at(0)!.at(0)
    }
    if (names.length < 3) {
        return `${names.at(0)!.at(0)}${names.at(1)!.at(0)}`
    }
    if (names.length > 2) {
        return `${names.at(0)!.at(0)}${names.at(-1)!.at(0)}`
    }
}

export const isValidImageUrl = (url: string) => {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};