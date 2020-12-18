# Частушки с использованием Yandex SpeechKit
## Макет: 
![макет](https://github.com/t0nyhat/chastushki_js/images/main.png)

### Попытка с помощью SpeechKit автоматически генерировать частушки ))
### Вдохновился [https://twitter.com/chastushkibot](https://twitter.com/chastushkibot)
### За Wav-header спасибо [zx-kapok](https://github.com/zx-kapok)

#### Backend развернут по IP- адресу [https://chastushki.tonyhat.site/api/speech](https://chastushki.tonyhat.site/api/speech)
#### Фронт доступен по адресу [https://chastushki.tonyhat.site](https://chastushki.tonyhat.site)

#### v2.1.0

  
## Функционал:
```
POST /api/speech 
 формат:
{
    "text": "Частушка",
    "voice": "alyss",
    "emotion": "good",
    "speed": 1
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
