# Garbage-Game 🍃
Эко-игра, которая научит вас сортировать мусор.
___

## Основные технологии, используемые в проекте:
<img align="left" alt="HTML" width="30px" src="https://img.icons8.com/color/344/html-5--v1.png" />
<img align="left" alt="CSS" width="30px" src="https://img.icons8.com/color/344/css3.png" />
<img align="left" alt="JavaScript" width="30px" src="https://img.icons8.com/color/344/javascript--v2.png" />
<img align="left" alt="React" width="30px" src="https://img.icons8.com/color/344/react-native.png" />
<img align="left" alt="Redux" width="30px" src="https://img.icons8.com/color/344/redux.png" />
<img align="left" alt="NodeJS" width="30px" src="https://img.icons8.com/fluency/344/node-js.png" />
<img align="left" alt="PostgreSQL" width="30px" src="https://img.icons8.com/color/344/postgreesql.png" />
<br/>
<br/>
А также: Sequelize, Drag&Drop, Figma и др.

___
## Механика игры и путь пользователя:
- Если пользователь не зарегистрирован/авторизирован, начать игру он не может. Если пользователь авторизован, он увидит форму ниже. 


![start screen](https://github.com/alterkate/Garbage-Game/blob/dev/client/public/screens/02_start.png?raw=true)
- В приложении используется Loader для тайм-аута при обращении к базе данных.


![loader](https://github.com/alterkate/Garbage-Game/blob/dev/client/public/screens/03_loader.png?raw=true)
- Основная механика игры заключается в сортировке разных видов отходов по бакам. Осуществлено с помощью технологии Drag&Drop. В интерфейсе игры также присутствует интерактивная шкала прогресса, "говорящий" персонаж, диалоги, бонусы и ачивки.


![game](https://github.com/alterkate/Garbage-Game/blob/dev/client/public/screens/04_game.png?raw=true)
- Конец игры обозначается бонусной статичной сценой!


![final](https://github.com/alterkate/Garbage-Game/blob/dev/client/public/screens/06_fin2.png?raw=true)
- Но это не всё! В игре есть два режима. Ниже вы увидите режим "конвейер", где единицы мусора движутся слева направо как на конвейере, а задача игрока - на скорость отсортировать мусор.


![hardmode_start](https://github.com/alterkate/Garbage-Game/blob/dev/client/public/screens/07hardmode.png?raw=true)
![hardmode](https://github.com/alterkate/Garbage-Game/blob/dev/client/public/screens/08hardmode2.png?raw=true)
- По истечении времени в режиме "конвейер" выходит модальное окно с таблицей лидеров. Пока что в ней только Alex, пора составить ему конкуренцию!


![hardmode_modal](https://github.com/alterkate/Garbage-Game/blob/dev/client/public/screens/09hardmode3.png?raw=true)
