export const calculateDownloadTime = (sizeinKB: number): string => {
  const secondsToDownload = (sizeinKB / 1.25) * (1 - Math.exp(-0.0036 / 3)) // 1.25 is 10000 Bits/Sec converted to KB/Sec. Recheck if the formula is Correct.
  return secondsToDownload < 60
    ? `${secondsToDownload.toFixed(2)} Sec`
    : `${(secondsToDownload / 60).toFixed(2)} Min`
}
