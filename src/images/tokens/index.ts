export const tokensImg = {
  usdt: '/usdt.svg',
  sol: '/sol.svg',
}

export const getTokenImg = (tokenId: string): string => {
  const imgsArray = Object.keys(tokensImg)
  const key = imgsArray.find((img) => tokenId.toLowerCase() === img)

  if (!key) return tokensImg.sol as unknown as string
  return tokensImg[key as keyof typeof tokensImg] as unknown as string
}
