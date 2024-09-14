import os
import telebot
from telebot import types
import requests
import pandas as pd
import docx

bot_token='7318929016:AAG-1YjaS_zDhZeTEDAhDEP6uT4IuTXKqDI'
bot=telebot.TeleBot(bot_token)
reading_list = []
@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, "Welcome to PagePal! Type /help to see the list of commands.")
@bot.message_handler(commands=['help'])
def help(message): 
    help_text = (
        "/start Welcome message\n"
        "/book Search for books by genre (returns CSV format)\n"
        "/preview Get a preview link for a book\n"
        "/list Add or remove a book from the reading list\n"
        "/reading list Show your reading list (returns DOCX format)"
    )
    bot.send_message(message.chat.id, help_text)

@bot.message_handler(commands=['preview'])
def preview(message):
    bot.send_message(message.chat.id, "Enter the title of the book you want to preview:")
    bot.register_next_step_handler(message, get_preview)
    
def get_preview(message):
    title=message.text 
    params = {"q": f"intitle:{title}", "key": "AIzaSyAhBOri220roPw1OodC2zFH5Pkwk8NZfvw"}
    response=requests.get("https://www.googleapis.com/books/v1/volumes", params=params)
    data=response.json()

    if "items" in data:
        volume_info = data["items"][0]["volumeInfo"]
        preview_link = volume_info.get("previewLink", "No preview available")    
        bot.send_message(message.chat.id, f"Preview: {preview_link}")
    else:
        bot.send_message(message.chat.id, "Sorry, we don't have a preview for that book.")

@bot.message_handler(commands=['book'])
def book(message):
    bot.send_message(message.chat.id, "Enter the genre of the book you're looking for (e.g., fantasy, science fiction):") 
    bot.register_next_step_handler(message, search_books)

def search_books (message):
    genre=message.text
    params = {'q': f'subject: {genre}', 'key': "AIzaSyAhBOri220roPw1OodC2zFH5Pkwk8NZfvw", 'maxResults': 5}
    response = requests.get("https://www.googleapis.com/books/v1/volumes", params=params)
    data = response.json()
    books = []

    for item in data.get('items', []):
        book_info = {
            'Title': item['volumeInfo'].get('title', 'N/A'),
            'Authors':', '.join(item['volumeInfo'].get('authors', 'N/A')), 
            'Publisher':    item['volumeInfo'].get('publisher', 'N/A'),
            'PublishedDate': item['volumeInfo'].get('publishedDate', 'N/A'), 
            'Preview Link': item['volumeInfo'].get('previewLink', 'N/A')
        }
        books.append(book_info)

    if books:
        df = pd.DataFrame (books)
        csv_file = 'book_recommendations.csv'
        df.to_csv(csv_file, index=False)
        with open(csv_file, 'rb') as f:
            bot.send_document(message.chat.id, f)
        os.remove(csv_file)    
    else:
        bot.send_message(message.chat.id, "No books found for the specified genre.")
        
bot.polling()