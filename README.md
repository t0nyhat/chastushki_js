# Частушки с использованием Yandex SpeechKit
<p align="center">
  <a aria-label="Build status" href="https://www.travis-ci.com/t0nyhat/chastushki_js">
    <img alt="Build status" src="https://www.travis-ci.com/t0nyhat/chastushki_js.svg?branch=master">
  </a>
</p>

## Макет: 
![макет](https://github.com/t0nyhat/chastushki_js/blob/master/images/main.png?raw=true)

### Попытка с помощью SpeechKit автоматически генерировать частушки ))
### Вдохновился [https://twitter.com/chastushkibot](https://twitter.com/chastushkibot)
### За Wav-header спасибо [zx-kapok](https://github.com/zx-kapok)

#### Backend развернут по IP- адресу [https://chastushki.tonyhat.site/api/speech](https://chastushki.tonyhat.site/api/speech)
#### Фронт доступен по адресу [https://chastushki.tonyhat.site](https://chastushki.tonyhat.site)

#### v2.1.2

  
## Функционал:
```
POST /api/speech 
 формат:
{
    "text": "Частушка",
    "voice": "alyss",
    "emotion": "good",
    "speed": 1,
    "lang":ru-RU,
}
в ответ придет wav файл 
```


## Установка

Для установки необходимо наличие Node.js и npm

Сохраните проект у себя на компьютере:
```
git clone https://github.com/t0nyhat/chastushki_js.git
```

В корне проекта через консоль/терминал запустите команду:
``` 
npm install
```
Добавляем свой .env файл
В него заносим 
``` 
API_KEY = 'свой'
TLG_TOKEN = 'токен своего телеграмм бота'
TLG_USER_ID = 'токен своего ID в телеграмм'


Создать сервисный аккаунт, генерировать урощенный API_KEY.
``` 

## Доступные команды:  
Запуск локального сервера с хот релоудом:  
```
npm run dev
```  
Запуск продакшн сервера:  
```
npm run start
```
### TODO
- Доработать api
- Доработать front
