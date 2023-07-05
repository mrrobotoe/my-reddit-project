import styled from 'styled-components'

const NUMERATOR = 16
const DENOMINATOR = 9

interface FrameProps {
  aspectRatio?: string
}

export const Frame = styled.div<FrameProps>`
  border-radius: var(--s-3);
  aspect-ratio: ${(props) =>
    props.aspectRatio
      ? `${props.aspectRatio}`
      : `${NUMERATOR} / ${DENOMINATOR}`};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img,
  & > video {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }
`
