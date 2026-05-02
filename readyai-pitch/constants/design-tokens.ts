// ReadyMove Branding - Design Tokens

export const GRADIENTS = {
  pine: {
    border: 'linear-gradient(135deg, rgba(45,90,61,0.3), rgba(45,90,61,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(45,90,61,0.4), rgba(45,90,61,0.2))',
    text: 'linear-gradient(135deg, rgb(45,90,61), rgb(36,73,47))',
  },
  strawberry: {
    border: 'linear-gradient(135deg, rgba(255,64,129,0.3), rgba(255,64,129,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(255,64,129,0.4), rgba(255,64,129,0.2))',
    text: 'linear-gradient(135deg, rgb(255,64,129), rgb(204,51,103))',
  },
};

export const GRADIENT_BORDER = {
  pine: {
    background: GRADIENTS.pine.border,
    border: '2px solid transparent',
    backgroundClip: 'padding-box',
  },
  strawberry: {
    background: GRADIENTS.strawberry.border,
    border: '2px solid transparent',
    backgroundClip: 'padding-box',
  },
};

export const COLORS = {
  primary: '#2d5a3d',
  accent: '#FF4081',
  pineDark: '#24492f',
  pineDarker: '#1a3522',
  strawberryDark: '#CC3367',
  mint: '#B2DFDB',
};
