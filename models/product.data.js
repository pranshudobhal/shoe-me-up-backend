const products = [
  {
    brand: 'Nike',
    name: 'Nike Phantom GT2 Elite FG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fda4ad22-9223-45bf-9516-5f0c3a3b3290/phantom-gt2-elite-fg-football-boot-wRNH0g.png',
    description: 'Firm-Ground Football Boot',
    price: 21995,
    inStock: true,
    fastDelivery: false,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT2 Elite FG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f1e54810-7d80-4e4f-adf3-94def42f97f1/phantom-gt2-elite-fg-football-boot-c2H8s5.png',
    description: 'Firm-Ground Football Boot',
    price: 21995,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT2 Academy MG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1291f00e-2499-4891-ab65-7f13bb09698a/phantom-gt2-academy-mg-multi-ground-football-boot-Mnr9D7.png',
    description: 'Multi-Ground Football Boot',
    price: 7995,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Elite Dynamic Fit 3D FG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/02c0d0c6-7a2a-4de4-8bf4-124a92e5e0d9/phantom-gt-elite-dynamic-fit-3d-fg-football-boot-rx9s9P.png',
    description: 'Firm-Ground Football Boot',
    price: 23995,
    inStock: true,
    fastDelivery: false,
  },
  {
    brand: 'Nike',
    name: 'Nike Jr. Phantom GT Academy MG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a0a599a1-9b88-46bc-832a-617be24d4491/jr-phantom-gt-academy-mg-younger-older-multi-ground-football-boot-ZRmCBW.png',
    description: 'Younger/Older Kids Multi-Ground Football Boot',
    price: 5495,
    inStock: true,
    fastDelivery: false,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Academy Dynamic Fit MG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b2b336fd-2046-4174-a257-b15b06527611/phantom-gt-academy-dynamic-fit-mg-multi-ground-football-boot-5mMjvK.png',
    description: 'Multi-Ground Football Boot',
    price: 6797,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Elite Dynamic Fit FG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ce08532-00c4-4518-8686-acab59cafdf0/phantom-gt-elite-dynamic-fit-fg-football-boot-GQgRv2.png',
    description: 'Firm-Ground Football Boot',
    price: 17597,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Elite By You',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddcce95f-5e55-4046-8151-e69102310140/custom-nike-phantom-gt-elite-by-you.png',
    description: 'Custom Firm Ground Football Boot',
    price: 22995,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Elite By You',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f35d8242-97cc-453c-8611-369eb2cf91ed/custom-nike-phantom-gt-elite-by-you.png',
    description: 'Custom Firm Ground Football Boot',
    price: 23995,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Elite By You',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c145d37-f616-433c-b427-52df62ebb892/custom-nike-phantom-gt-elite-by-you.png',
    description: 'Custom Firm Ground Football Boot',
    price: 22995,
    inStock: true,
    fastDelivery: false,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Academy Dynamic Fit IC',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dbbe6101-c740-44d6-82e4-0cf6d51959ef/phantom-gt-academy-dynamic-fit-tf-artificial-football-shoe-NgGZ8W.png',
    description: 'Indoor Court Football Shoe',
    price: 6797,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom Scorpion Academy Dynamic Fit TF',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9133e2f4-d77e-4a28-9162-d8143a267de6/phantom-scorpion-academy-dynamic-fit-tf-artificial-football-shoe-hpPgP7.png',
    description: 'Artificial-Turf Football Shoe',
    price: 7197,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Academy IC',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/96c74806-ad3f-46d3-934b-fd901315180e/phantom-gt-academy-ic-indoor-court-football-shoe-NxLbLS.png',
    description: 'Indoor Court Football Shoe',
    price: 6397,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Academy TF',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd8813df-4f7e-4fe9-beb6-72469a20ae55/phantom-gt-academy-tf-artificial-football-shoes-fzJRNN.png',
    description: 'Artificial-Turf Football Shoes',
    price: 6397,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Academy MG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cf606747-b2be-4d57-99b7-e48e14f22da8/phantom-gt-academy-mg-multi-ground-football-boot-Tpd31k.png',
    description: 'Multi-Ground Football Boot',
    price: 7995,
    inStock: true,
    fastDelivery: false,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Elite FG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f96a76ce-12bf-49cd-abdf-4ac2d7160b94/phantom-gt-elite-fg-football-boot-rXskN1.png',
    description: 'Firm-Ground Football Boot',
    price: 21995,
    inStock: true,
    fastDelivery: true,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Elite By You',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8849966-f66c-47a7-b647-3a01ceda0389/custom-nike-phantom-gt-elite-by-you.png',
    description: 'Custom Firm Ground Football Boot',
    price: 22995,
    inStock: true,
    fastDelivery: false,
  },
  {
    brand: 'Nike',
    name: 'Nike Phantom GT Elite By Lautaro',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43ccc496-ebb6-4f2c-b160-8712d45ac687/custom-nike-phantom-gt-elite-by-you.png',
    description: 'Custom Firm-Ground Football Boot',
    price: 22995,
    inStock: true,
    fastDelivery: false,
  },
  {
    brand: 'Nike',
    name: 'Nike Jr. Phantom GT Club MG',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/92a09033-b7e5-41db-8653-2369fed16fdf/jr-phantom-gt-club-mg-younger-older-multi-ground-football-boot-qTrCdS.png',
    description: 'Younger/Older Kids Multi-Ground Football Boot',
    price: 2957,
    inStock: true,
    fastDelivery: false,
  },
];

module.exports = products;
