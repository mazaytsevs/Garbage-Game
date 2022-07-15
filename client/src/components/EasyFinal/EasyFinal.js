// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Modal from '../Modal/Modal';
// import { getProgressThunk } from '../../redux/actions/progress.action';

// import './easyfinal.css';

// function EasyFinal() {
//   const dispatch = useDispatch();
//   const progress = useSelector((state) => state.progress);

//   useEffect(() => {
//     dispatch(getProgressThunk());
//   }, []);

//   const [flag, setFlag] = useState(false);

//   useEffect(() => {
//     if (+progress.score === 120) {
//       setFlag(true);
//     }
//   }, [progress]);

//   return (
//     <div className="rulesContainer">
//       <Modal
//         isVisible={flag}
//         title={<>Тысяча благодарностей!</>}
//         content={(
//           <div className="rulesText">
//             Вот это ты молодец! Спасибо!
//             Ты помог мне правильно распределить весь мусор и тем самым принес пользу природе!
//             <p>
//               Ну, и я, конечно, в накладе не остался.
//               Посмотри, кем я был до встречи с тобой и кто я сейчас!
//             </p>
//             <p>
//               Моя жизнь круто изменилась. Небеса вознаградили меня за все мои старания
//               и на одной из свалок я нашел паспорт. Мои знания в области сортировки мусора,
//               а также жизненный опыт, природное обаяние и этот самый паспорт
//               (не заявляй в правоохранительные органы, пожалуйста, ведь мы же друзья?)
//               позволили мне устроиться на работу в Гринпис и переехать в Амстердам.
//             </p>
//             <p>
//               Деньги, слава и популярность, которые сейчас на меня свалились,
//               не вскружили мне голову. Я помню, что всё это благодаря тебе!
//               Деньгами не поделюсь, но совет дам: заботься о природе, потому что она у нас одна!
//             </p>
//             <p>
//               Кстати, если ты уверен в своих силах, то можешь попробовать сыграть
//               в эту игру в соревновательном режиме. Удачи!
//               <img width="100" src="/man/man-look-58-59-60.png" alt="asad" />
//             </p>
//           </div>
//             )}
//         onClose={() => setFlag(false)}
//       />
//     </div>

//   );
// }

// export default EasyFinal;
