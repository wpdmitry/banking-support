import React from "react";

import Image, { ImageProps } from "../image";

interface MerchantLogoProps extends Omit<ImageProps, "src"> {
  merchantId: string;
}

interface AccountLogoProps extends Omit<ImageProps, "src"> {
  logoId: string;
}

interface UserLogoProps extends Omit<ImageProps, "src"> {
  userId: string;
}

interface StickerLogoProps extends Omit<ImageProps, "src"> {
  stickerId: string;
}

export function MerchantLogo({ merchantId, ...rest }: MerchantLogoProps) {
  return <Image src={`/images/merchants/${merchantId}.png`} {...rest} />;
}

export function AccountLogo({ logoId, ...rest }: AccountLogoProps) {
  return <Image src={`/images/accounts/${logoId}.png`} {...rest} />;
}

export function UserLogo({ userId, ...rest }: UserLogoProps) {
  return <Image src={`/images/users/${userId}.png`} {...rest} />;
}

export function StickerLogo({ stickerId, ...rest }: StickerLogoProps) {
  return <Image src={`/images/stickers/${stickerId}.png`} {...rest} />;
}
