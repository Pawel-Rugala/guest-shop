module.exports = {
 content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {
   gridTemplateColumns: {
    layxl: '1fr 1200px 1fr',
    laylg: '72px 1fr 72px',
    laymd: '50px 1fr 50px',
    laysm: '25px 1fr 25px',
    layxs: '20px 1fr 20px',
   },
   colors: {
    prim: '#AD8C64',
    sec: '#EEECEA',
    grej: '#707070',
    dark: '#484954',
    blak: '#181818',
   },
  },
 },
 plugins: [],
}
