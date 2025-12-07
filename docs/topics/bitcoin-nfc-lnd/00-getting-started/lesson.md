---
title: Set Up a BoltRing with LNbits
last_updated: 2025-11-17
difficulty: beginner
duration: 45m
---

> 📅 **Looking for date/time/location?**  
> See the current [Event Page](./index.md)



# BoltRing LNbits Setup

**Audience:** New BoltRing users or those testing LNbits Bolt Card functionality.

**Duration:** 45 minutes

**Outcomes:** By the end, students will:

* Understand the security tradeoffs of a public vs. self-hosted LNbits server.
* Install and use the Bolt Card Creator app to read a BoltRing's UID.
* Create and fund an LNbits wallet.
* Install the Bolt Cards extension.
* Create a Bolt Card Service and pair it with a physical BoltRing.
* Hybrid Node vs Private Node

---

## Abstract

This 45-minute guide walks beginners through pairing a BoltRing with the LNbits Bolt Card extension. LNbits is a free, open-source lightning account system with Bolt Card support. This guide shows you how to pair your BoltRing using a public LNbits instance for quick setup and testing.

### Philosophy & Security

> **Security Notice**
> In this guide, we use a public demo installation of LNbits (**legend.lnbits.com**), which means **you must trust the service operators** to guard your satoshis. Don´t be reckless; use it with caution and only for testing with small amounts.
>
> **Use your own LNbits server**
> You can also use this guide to pair your BoltRing with your self-hosted LNbits server. But be aware that your LNbits server has to be publicly reachable over clearnet with a https URL. A default Umbrel/start9 installation of LNbits will not work!

---

## Step 0 - Requirements

Before you begin, make sure you have the following:

* An existing Lightning Wallet that you can use to fund your LNbits account with.
* A Mobile Phone with NFC support (Only actually works with android).
* A BoltRing or NFC424 enabled device that has not been set up yet (or has been [wiped](./#)).

---

## Step 1 - Install Bolt Card Creator

If you have an **Android** phone install the **Bolt Card NFC Card Creator App** from Google Play. If you are using an **iPhone** install the **Boltcard NFC Programmer** from the App Store. This doesn't really work well with iPhone.

You will need this app later to write the bolt service configuration to the BoltRing. You will also need the NFC UID of your BoltRing for this set-up. You can either find it on the front page of the leaflet that came with your BoltRing or you can scan the BoltRing to get the NFC UID.

If you already have your UID and are in a hurry, you can skip this section and continue with step 2.

### Read BoltRing NFC UID

Using the Bolt Card Creator/Programmer App:

1.  Select the **Advanced** tab at the bottom of the start screen of the Bolt Card Creator App.
2.  Select the **Read NFC** tab on the stacked menu.

3.  Scan your BoltRing by holding it to the back of your phone.
4.  Take note of the **UID** of your BoltRing.

**Memorize the NFC antenna location:**
Smartphones have their NFC antenna in different places. Usually, it is in the upper third of the back of the phone. While scanning the BoltRing, pay attention to the position the app detects the BoltRing. Knowing the antenna position will give you more confidence when writing the configuration to the BoltRing later.

> **Error: This NFC card has not been formatted.**
> If you get this error, you can use the **NXP TagWriter App** to erase and format your tag as NDEF.

---

## Step 2 - Create an LNbits Wallet

Do these steps from a PC. The guide assumes you create your LNbits wallet from a desktop PC.

1.  Browse to **https://legend.lnbits.com/** (or your own LNbits installation).
2.  Type a memorable name for your wallet.
3.  Click **ADD A NEW WALLET**.
4.  Take note of your Wallet-URL.

> **Secure your Wallet-URL**
> The LNbits wallet you created does not have a password-protected login. The **Wallet-URL** shown in the browser after completing the setup IS YOUR PASSWORD/LOGIN. So please make a backup of the full Wallet-URL and keep it a secret.

---

## Step 3 - Fund Your Wallet

Click the **CREATE INVOICE** button and send some satoshis to your LNbits wallet.

---

## Step 4 - Install Extension

Activate the LNbits Bolt Card Extension for your wallet as follows:

1.  Click on **Manage Extensions** in the left menu.
2.  Click **ENABLE** on the **Bolt Cards** tile.

3.  Click **OPEN** or the new **Bolt Cards** item in the left menu.

---

## Step 5 - Create Bolt Card Service

1.  Click the orange **plus** button on the Bolt Cards Extension screen.
2.  On the card creation form:
    * Select the LNbits wallet you created before.
    * Set a limit of satoshis per transaction (for example, 100 000).
    * Set a limit of satoshis per day (for example, 600 000).
    * Type a memorable name for your BoltRing.
    * Enter the NFC UID of your BoltRing (from Step 1).
    * Click **CREATE CARD**.


3.  After clicking **CREATE CARD**, you should see the card service created. Click the **QR Code** in the first column of the list to show the QR code you need in the next step.


After clicking the QR code symbol, you should see the card creation popup.

**Make sure you back up the keys shown below the QR code.** You will need them to reset/wipe your BoltRing later. Should LNbits become unavailable, these keys will allow you to restore your cards on a different server.

---

## Step 6 - Pairing Your BoltRing

1.  Use the **Bolt Card Creator/Programmer App** on your phone (from Step 1).
2.  Select the **Write** tab at the bottom of the start screen.
3.  Scan the **QR code** from the LNbits popup (from Step 5) using the app's QR code scanner.
4.  The app will show "Bolt Card Service URL received" and populate the write fields.
5.  Press the **WRITE** button.
6.  Scan your BoltRing by holding it to the back of your phone (at the antenna location you found in Step 1).
7.  The app should show a "Success" message indicating the configuration has been written.

Congratulations! Your BoltRing is now paired with your LNbits wallet.

---

> 📅 **Looking for date/time/location?**  
> See the current [Event Page](./index.md)