---
title: '数据科学之五大问题类:降维,分类,聚类,强化,回归'
date: 2019-04-22T10:20:02+08:00
categories: ['data science']
tags: ['machine learning']
description: '来自 courses.edx.org 的网上教程'
draft: true
---

# 数据科学

[courses.edx.org 来源](https://courses.edx.org/courses/course-v1:Microsoft+DAT210x+1T2018a/courseware/8bfa6ab3-aa59-23e1-e664-8ea88504fbe6/88ab74fd-246a-8d94-9237-1e63405c7df7/?child=last)

- **Types of Machine Learning**
  There are three main types of machine learning: unsupervised learning, supervised learning, and reinforcement learning. However in this course, you'll be focusing on the first two. These two types enable a computer to do a generic task by examining reams of data. To illustrate the difference between the two, consider the following:

Let's say your name is Angie, and your husband's name is Craig. You're both organized people and both enjoy maintaining lists. In fact, you have a list of every company you've ever done business with, along with some details about them, such as how reliable they were. Craig also has a list. His list is of every transaction he's ever made, along with some details about those transactions, such as the items transacted and their costs.

- **Unsupervised Learning**
  You and Craig decide to get into the computer resale business. Being data driven people, you wish to do so in an educated way, so you use your lists. Going through yours, you notice the companies that sell computers seem to all be located around some place called 'Silicon Valley'. You also notice the companies with the best reviews are those that pay attention to sleek case designs. Oh, except this one company called 'Fast-Computers', which has awesome reviews, but their computers that look like they were designed by a 10-year old.

Unsupervised learning is similar to this. Given a lot of data, the computer hasn't the slightest idea what any of it means. Yet, it's still able to figure out if there are any meaningful groupings and patterns within the data, along with instances where that data seems out of place!

- **Supervised Learning**
  Craig's approach to the computer resale challenge is different. All he's really interested in is:

How much should you price a computer at, given its stats?
What price should you buy a computer for, to maximize your profits?
Looking through his data list, he discovers a correlation between a computer's processor speed, its storage space, and its cost. In fact, Craig is able to calculate a precise equation that models this! He's also able to create a set of "IF this AND that THEN transact" rules to decide when it is best to buy or sell a computer.

Unlike unsupervised learning where the computer had no idea what any of the data meant, with supervised learning, the computer is in charge of taking your data and then fitting rules and equations to it. Once it learns these generalized rules through a process called modeling, the rules can be applied to data the computer has never seen before.

## menu

<!-- START doctoc -->
<!-- END doctoc -->

## Classification

收藏此页

The goal of classification is to identify what _class_ a sample belongs to.

A class could be something like _Windows 10 Mobile_, whereas a sample could be something like _phone_. To get classification working, you have to feed the computer a large number phone samples, some of them labeled _Windows 10 Mobile_, and others labeled, well... _non-Windows 10 Mobile_. With enough training data, a classifier will eventually be able to generalize what similarities constitute a Windows 10 Mobile phone and voilà, you've trained a computer to figure out phone types!

![Classification Example](//prod-edxapp.edx-cdn.org/assets/courseware/v1/66d7763489ee559bacc075ca0c6799c2/asset-v1:Microsoft+DAT210x+1T2018a+type@asset+block/M2L3_Classification.png)

### More Examples

- Given a list of emails marked spam and not-spam, figure out if a newly received message is actually spam or not.
- Given many different images of your friends, perform facial recognition on a new, never-before seen image of one of your friends.
- After being trained with a few books, decide which of the before seen authors wrote an unidentified article.
- Given a list of physical symptoms, determine what ailment a person has.

Classification falls into the realm of supervised learning because for it to work, you have to guide the computer by proving it with examples of correctly labeled records. Once you're done training the computer, you can test it by seeing how accurately it scores those new records.

### Regression

收藏此页

The goal of regression is to predict _continuous-valued_ features associated with many samples. Continuous-valued meaning small changes in the input result in small changes of the output.

Imagine driving from New York to San Francisco. As time progresses, your distance from New York increases and your distance to San Francisco decreases. Even though you stop for meals and to rest, these distance values transition smoothly. Throughout the course of your travel, you never magically teleport a large distance. Instead, you smoothly and incrementally make your way bit by bit.

With regression, a mathematical relationship is modeled for your samples so that as you gently alter an input feature, your output feature(s) respond by being altered as well. In our example, that would be your time journeying and your distance to your destination!

![Regression](//prod-edxapp.edx-cdn.org/assets/courseware/v1/bb9dde6e789153344680eed2c588e7a0/asset-v1:Microsoft+DAT210x+1T2018a+type@asset+block/M2L3_Regression.png)

### More Examples

- Calculate an equation to predict the size of a house given its price, or the price of a house given its size.
- Explore if a correlation exists between the hours a student spends studying, spends watching TV, and their final exam score.
- Estimate how many power plants should be constructed in the next 50 years, based upon the historical energy consumption per household.
- Figure out how many days a person has left to live based on the severity of their symptoms.

Regression falls into the realm of supervised learning because you have to provide the computer with labeled samples. It then attempts to fit an equation to the samples' features.

## Clustering

收藏此页

The goal of clustering is to automatically group similar samples into sets.

Since a clustering algorithm has no prior knowledge of how the sets should be defined, and furthermore, since the clustering process is unsupervised, it needs to have a way to tell which samples are the most similar so it can group them accordingly. It does this the same way we humans do: by looking at the various characteristics and features of each sample.

![Clustering](//prod-edxapp.edx-cdn.org/assets/courseware/v1/f21578d82ff3d7e451e9054d8dc93163/asset-v1:Microsoft+DAT210x+1T2018a+type@asset+block/M2L3_Clustering.png)

### More Examples

- Match similar people on a matrimonial website based on their profile answers.
- Through examining search history, recommend houses a prospective home-buyer might be interested in buying.
- Pinpoint the most likely location for a future earthquake using past seismic data.
- Identify new characteristics shared by different people suffering from the same disease.

There are different types of clustering algorithms, some supervised, some unsupervised. There are even semi-supervised clustering methods as well.

In this course, you'll only be dealing with unsupervised clustering. In other words, the clustering algorithm you will use won't need anything except your raw data. No labels hinting at desired clustering outcome will be provided to the algorithm.

## Dimensionality Reduction

收藏此页

The goal of dimensionality reduction is to systematically and intelligently reduce the number of features considered in a dataset. Stated differently, trim the fat off. Often times, in one's eagerness to collect enough data for machine learning to be effective, you might add irrelevant features to your dataset. Bad features have the effect of hindering the machine learning process, and make your data harder to understand. Dimensionality reduction attempts to trim your dataset down to the bare essentials needed for decision-making.

![Dimensionality Reduction](//prod-edxapp.edx-cdn.org/assets/courseware/v1/35df5382d2ce7991291cdec847658927/asset-v1:Microsoft+DAT210x+1T2018a+type@asset+block/M2L3_DR.png)

### More Examples

- Given a 100 question survey, attempt to find the gist of what is truly being assessed; then rephrase it with just 5 questions.
- Build a robot that can recognize pictures of similar objects, even if they are rotated at odd angles and orientations.
- Compress a video stream by reducing the number of colors.
- Summarize a long book.

Dimensionality reduction falls into the realm of unsupervised learning because you don't instruct the computer which features you want it to create. Rather, the computer infers this information automatically by examining your unlabeled data.

## Reinforcement Learning

收藏此页

The goal of reinforcement learning is to maximize a cumulative reward function--or equivalently, minimize a cost function--given a set of actions and results.

Reinforcement learning is modeled to mimic the way we learn in the real world. We try to solve problems using different techniques. Most of the time, nothing of merit results from our experiments. But occasionally, we stumble upon a set of actions that cause a sweet reward. When this happens, we attempt to repeat those actions that get us rewarded.

If we are rewarded yet again, we further associate those actions with the reward, and this is known as the reinforcement cycle. The entire process is also known as performance maximization.

![Rubiks](//prod-edxapp.edx-cdn.org/assets/courseware/v1/4b51e70cbd8c5e02cd403b4a416a1dfd/asset-v1:Microsoft+DAT210x+1T2018a+type@asset+block/M2L3_RL.png)

### More Examples

- Discover how to fly a quadcopter by minimizing the function which evaluates the chances of it crashing.
- Learn to beat a video game like 'Super Mario Bros.' by minimizing the time it takes to get to the castle.
- Attempt to take a photo and "re-draw" it in the style of a particular artist.
- Automate the trading of stocks and securities by maximizing profit and minimizing transaction fees.

Reinforcement learning is a bit different from regular supervised and unsupervised learning. To illustrate this difference, imagine you had a rubick's cube. With unsupervised learning, none of your data has a label. Due to this, you neither know if the cube is in a solved state, an unsolved state, or even what you need to do with it! All you can do is learn about the structure of the cube--namely that it has six distinct colors, and 9 pieces per face, all belonging to a specific color.

With supervised learning, your aim might be to find if the rubick's cube is in a solved configuration or not. To teach a computer this, you'd have to show it many hundreds of examples of rubick's cubes, each labeled solved or not-solved. We refer to this 'dense' labeling.

With reinforcement learning, your goal might be something like given a rubick's cube in some initial configuration, derive a set of actions which would result in it being solved. Training a computer to do this would involve having the computer attempt to change the state of the cube many times, and then after a while, informing the computer if it's succeeded or failed. With enough trials, the computer will get better at quickly doing those actions which result in a successfully solved puzzle, irrespective of the initial configuration of the cube. As such, reinforcement is a type of 'sparsely' labeled, semi-supervised learning.

To learn more about reinforcement learning, take a look at the Dive Deeper section. We won't return to reinforcement learning in this class, but it's important to be aware of it as a data scientist. Much work has been done using reinforcement learning and deep neural networks that are of benefit to machine learning.
