import Color from "color";

export const withAlpha = (color: string, alpha: number) =>
  Color(color).alpha(alpha).string();
