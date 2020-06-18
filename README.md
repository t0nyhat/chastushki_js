# Частушки с использованием Yandex SpeechKit

### Попытка с помощью SpeechKit автоматически генерировать частушки ))
### Вдохновился [https://twitter.com/chastushkibot](https://twitter.com/chastushkibot)
### За авторизацию спасибо [RomanFadeev26](https://github.com/RomanFadeev26)
### За Wav-header спасибо [zx-kapok](https://github.com/zx-kapok)

#### Backend развернут по IP- адресу ? [тут](https://?/)
#### Также доступен на домене [https://chastushki.tonyhat.site/](https://chastushki.tonyhat.site/)
#### Фронт доступен по адресу [https://chastushki.tonyhat.site/](https://chastushki.tonyhat.site/)
#### Фронт доступен по адресу [https://chastushki.tonyhat.site/](https://chastushki.tonyhat.site/)
  
### Функционал:
```
POST /api/speech - регистрация нового пользователя
 формат:
{
	"text": "Частушка",
}
в ответ придет wav файл 
```


## Установка

Для установки необходимо наличие Node.js и npm

Сохраните проект у себя на компьютере:
```
git clone ?
```

В корне проекта через консоль/терминал запустите команду:
``` 
npm install
```
Добавляем свой .env файл
В него заносим 
``` 
FOLDER_ID = 'свой'
KEY_ID = 'свой'
ISS = 'свой'
``` 

#### Доступные команды:  
Запуск локального сервера с хот релоудом:  
```
npm run dev
```  
Запуск продакшн сервера:  
```
npm run start
```

