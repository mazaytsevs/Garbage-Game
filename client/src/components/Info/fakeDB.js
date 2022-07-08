// приходит с бэка

const trash1 = {
  trash_name: 'Банановая кожура',
  trash_img_src: 'https://image.shutterstock.com/image-photo/bananas-skin-isolated-on-white-260nw-178684472.jpg',
  info: 'ляля про банан',
  score: 100,
  bonus: false,
};
const trash2 = {
  trash_name: 'Яблочный огрызок',
  trash_img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiX5dwjq9hxSd3A5nGS2jItoTIdRzy2VQzA&usqp=CAU',
  info: 'ляля яблоко',
  score: 400,
  bonus: false,
};
const trash3 = {
  trash_name: 'суп',
  trash_img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJI50WAzPpLldHn6NLic2J59pEt17NnF-15A&usqp=CAU',
  info: 'ляля 1',
  score: 300,
  bonus: false,
};
const trash4 = {
  trash_name: 'мидии',
  trash_img_src: 'https://www.kamchatskydom.ru/upload/iblock/7e4/midiya-greya-razmer.jpg',
  info: 'ваавава',
  score: 200,
  bonus: false,
};
const trash5 = {
  trash_name: 'фольга',
  trash_img_src: '/picturesMariaZob/Folga.png',
  info: 'это пластик',
  score: 400,
  bonus: false,
};
const trash6 = {
  trash_name: 'газета',
  trash_img_src: '/picturesMariaZob/Newspaper.png',
  info: 'это пластик',
  score: 50,
  bonus: false,
};
const trash7 = {
  trash_name: 'консерва',
  trash_img_src: '/picturesMariaZob/CanCan.png',
  info: 'это пластик',
  score: 150,
  bonus: false,
};
const trash8 = {
  trash_name: 'баночка',
  trash_img_src: '/picturesMariaZob/Can.png',
  info: 'это пластик',
  score: 150,
  bonus: false,
};
const trash9 = {
  trash_name: 'пластиковая бутылка',
  trash_img_src: '/picturesMariaZob/PlasticBottles.png',
  info: 'это пластик',
  score: 150,
  bonus: false,
};
const trash10 = {
  trash_name: 'стекляные бутылки',
  trash_img_src: '/picturesMariaZob/GlassBottles.png',
  info: 'это пластик',
  score: 150,
  bonus: false,
};

const trashcan1 = {
  id: 1,
  trash_can_name: 'Органика',
  trash_can_info: 'Тут инфа про вид мусора итд Органика',
  trash_can_img_src: '/picturesMariaZob/organicTRASHCAN.png',
  trashes: [trash1, trash2, trash3, trash4],
};
const trashcan2 = {
  id: 2,
  trash_can_name: 'Металл',
  trash_can_info: 'Тут инфа про вид мусора итд Металл',
  trash_can_img_src: '/picturesMariaZob/TRASHCAN_metal.png',
  trashes: [trash5, trash7, trash8],
};
const trashcan3 = {
  id: 3,
  trash_can_name: 'Бумага',
  trash_can_info: 'Тут инфа про вид мусора итд Бумага',
  trash_can_img_src: '/picturesMariaZob/TRASHCAN_paper.png',
  trashes: [trash6],
};
const trashcan4 = {
  id: 4,
  trash_can_name: 'Стекло',
  trash_can_info: 'Тут инфа про вид мусора итд СТЕКЛо',
  trash_can_img_src: '/picturesMariaZob/TRASHCAN_glass.png',
  trashes: [trash6, trash10],
};
const trashcan5 = {
  id: 5,
  trash_can_name: 'Пластик',
  trash_can_info: 'Тут инфа про вид мусора итд Пластик',
  trash_can_img_src: '/picturesMariaZob/TRASHCAN_plastic.png',
  trashes: [trash6, trash9],
};

const infoFromBack = [trashcan1, trashcan2, trashcan3, trashcan4, trashcan5];

export default infoFromBack;
// const info {
//   id: 1,
//   trash_can_name: 'Органика',
//   trash_can_info: 'Тут инфа про вид мусора итд',
//   trash_can_img_src: 'https://icons.iconarchive.com/icons/vexels/office/1024/trash-icon.png',
//   trashes: [
//     {
//       trash_name: 'Банановая кожура',
//       trash_img_src: 'https://image.shutterstock.com/image-photo/bananas-skin-isolated-on-white-260nw-178684472.jpg',
//       info: 'ляля про банан',
//       score: 100,
//       bonus: false
//     },
//     {
//       trash_name: 'Яблочный огрызок',
//       trash_img_src: 'https://e7.pngegg.com/pngimages/371/202/png-clipart-mario-kart-8-super-mario-kart-banana-peel-banana-s-food-text-thumbnail.png',
//       info: 'ляля яблоко',
//       score: 400,
//       bonus: false
//     },
//     {
//       trash_name: 'суп',
//       trash_img_src: 'https://kaliningradlive.com/wp-content/uploads/2022/07/image_thumb-8.png',
//       info: 'ляля 1',
//       score: 300,
//       bonus: false
//     },
//     {
//       trash_name: 'мидии',
//       trash_img_src: 'https://kaliningradlive.com/wp-content/uploads/2022/07/image_thumb-8.png',
//       info: ' ваавава',
//       score: 200,
//       bonus: false
//     }
//   ]
// }
