# Lab 8 - Starter

Name: Yifan Hou

## 1) In your own words: Where would you fit your automated tests in your Recipe project development pipeline?
I would choose 2 which is manually run them locally before pushing code. Check and fix the bugs before pushing would make the following steps work better and the whole development process more effective, otherwise the problems will be detected later one need to edit more to fix it.

## 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
No

## 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No. A "message" feature is achieved by interaction of different components of an application and unit tests are designed for individual component. Thus, the "message" feature cannot be tested within one single unit test.

## 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. The "max message length" feature is in an individual component of the messaging application. One can get the length of message within that component and test if it's more than 80 characters with a unit test.
