from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from tkinter import *
from tkinter import ttk
from PIL import Image, ImageTk
userinput = ''
window = Tk()
window.geometry("650x150")
window.title("Twitter")
ico = Image.open('twitter.png')
photo = ImageTk.PhotoImage(ico)
window.wm_iconphoto(False, photo)
def display_text():
    global entry
    string = entry.get()
    
    
    driver = webdriver.Chrome()
    driver.get('https://twitter.com/'+string)
    time.sleep(30)
    header = driver.find_element(by = By.XPATH, value= "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div")
    header.screenshot('screenshots/'+string+'.png')
    driver.close()

label = Label(window, text = "Twitter Profile Finder", font =("Courier 22 bold"))
label.pack()

entry = Entry(window, width=40)
entry.focus_set()
entry.pack()

ttk.Button(window, text = "Okay", width = 20, command=display_text).pack(pady=20)
window.mainloop()
