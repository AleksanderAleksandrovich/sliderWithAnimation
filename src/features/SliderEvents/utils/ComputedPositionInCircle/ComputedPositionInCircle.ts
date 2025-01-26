export const computePosition = (
  index: number,
  total: number,
  radius: number,
  angle: number
) => {
  const step = (2 * Math.PI) / total;
  const initialOffset = -Math.PI / 3;
  const currentAngle = step * index + (angle * Math.PI) / 180 + initialOffset;
  const x = radius * Math.cos(currentAngle);
  const y = radius * Math.sin(currentAngle);
  return { x, y };
};
