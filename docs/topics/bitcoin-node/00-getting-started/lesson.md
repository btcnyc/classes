---
title: Run a Bitcoin Node (Umbrel/Start9)
last_updated: 2025-01-15
difficulty: beginner
duration: 90m
---

> 📅 **Looking for date/time/location?**  
> See the current [Event Page](./index.md)

![Hands-on Bitcoin node setup on a workbench](../assets/bitcoin_node.webp){ width="100%" }

# Bitcoin Node · Getting Started

**Audience:** Beginner–intermediate

**Duration:** 90–120 min (see timing in Agenda)

**Outcomes:** By the end, students will:

* Understand what a Bitcoin node is and why to run one (sovereignty, privacy, security).
* Boot a node with StartOS, complete initial setup, and understand CA trust.
* Install Bitcoin Core **or** Bitcoin Knots and understand their relationship.
* Connect electrs and Sparrow Wallet to their own node.
* Send/receive a small on-chain transaction and inspect it.

## Abstract

Running a Bitcoin node means operating Bitcoin’s rules yourself. Your machine downloads the entire blockchain, verifies every transaction, and enforces the consensus rules—like the 21 million BTC cap—so you decide what counts as Bitcoin. With a node you gain monetary sovereignty, unlock self-custodial Lightning and other apps, protect your privacy, and help keep the network decentralized by relaying honest data and rejecting invalid blocks.

---

## Concept Primer (10–15 min)

### What is a node?

A Bitcoin node is your personal referee for the network:

* Runs the Bitcoin protocol and participates as a peer in the P2P network.
* Downloads, maintains, and verifies the entire blockchain history from genesis onward.
* Validates every transaction and block, enforcing the consensus rules (supply cap, issuance schedule, difficulty adjustment, double-spend prevention).
* Rejects invalid data, keeping Bitcoin decentralized, secure, and honest.

### Node types

* **Full / Archival:** Checks every rule from genesis, stores the complete blockchain plus the live UTXO set.
* **Pruned:** Validates like a full node but deletes old block files to save disk space while retaining the UTXO set.
* **Light (SPV):** Downloads only block headers and trusts full nodes for details—convenient but not trustless.
* **Mining node:** A full node that also builds candidate blocks, hashes nonces, and collects block rewards when it wins.

### Advanced technical summary

* Stores and syncs the blockchain tip-to-genesis while maintaining the UTXO set.
* Verifies signatures, scripts, and absence of double spends before accepting data.
* Enforces the 21 million BTC supply, halving schedule, and difficulty adjustments every 2,016 blocks.
* Filters out invalid transactions/blocks before they propagate to honest peers.
* Relays valid transactions and new blocks across the network to keep other nodes up to date.

### Why run your own node?

**TL;DR:** You enforce the rules, verify your money, and unlock self-custodial services.

**Sovereignty & trustlessness**

* If you’re not running your own node, you’re trusting someone else’s view of Bitcoin—and that means you are not sovereign.
* Your node chooses which consensus rules to enforce; no one can force upgrades or rule changes on you.
* Example: When you plug in a hardware wallet, the companion app might claim you received 0.01 BTC. Without your own node, you cannot prove whether that is BTC, BCH, or fake data.
* If centralized providers mistakenly or maliciously accept a 25 million coin supply, your node rejects it and defends the 21 million cap.
* Running your own node keeps you anchored to the canonical ledger governed by the rules you select.

**Self-custodial Lightning & apps**

* Lightning custody requires liveness—only your own node gives you trust-minimized Lightning channels.
* Your node is a platform for sovereign services: Mempool.space, BTCPay Server, JoinMarket, RoboSats, Bisq, Sparrow Wallet, Sphinx Chat, Datum Gateway for mining templates, private cloud tooling, password managers, IPFS podcasting, Nostr clients, GPT-style models, and more.

**Privacy**

* Without your own node, wallets leak your IP address and XPUB to someone else’s server, linking all past and future transactions.
* With your node, no external party learns which addresses you control or the destinations of your payments; you browse the chain locally and keep network metadata private.

**Security**

* Full nodes remove third-party risk that plagues SPV wallets or hosted services.
* You independently verify every transaction affecting your balance, so fake coins and invalid spends never fool you.

**Help the network stay honest**

* By running a node you enforce the ruleset you choose—including supply cap, block timing, and difficulty.
* You relay valid transactions and blocks (including newly mined blocks), reject invalid ones, and provide historical data to peers that are syncing or returning online.
* Lightweight wallets rely on your node for filtered block data, transaction broadcasts, and archival history.
* Economic nodes that secure their own coins raise the cost for adversaries trying to co-opt Bitcoin.

**Game theory & governance**

* Bitcoin’s checks and balances involve developers, miners, and node operators—nodes decide what software (and thus what rules) they accept.
* Node runners are the referees: if someone tries to “move a pawn three squares,” your node refuses to play along and disconnects.
* The collective judgment of many independent nodes keeps Bitcoin decentralized and censorship resistant.

---

## Agenda (suggested timing)

1. **Concepts & motivation** (15)
2. **Hardware prep** (10)
3. **Flash StartOS & boot** (20)
4. **Initial setup & CA trust** (15)
5. **Install services (Core/Knots, electrs) & connect Sparrow** (20)
6. **Hands‑on send/receive & mempool** (15)
7. **Q&A / Troubleshooting** (5–10)

---

## Prerequisites (tell students ahead)

* Laptop + admin rights; charger.
* Optional: small SSD if building a dedicated box (pruned nodes work on smaller disks).
* A phone for 2FA/seed backups if you’ll demo wallets.

**Instructor prep**

* Bring a small "class treasury" UTXO for test sends.
* Confirm current StartOS release and links before class.

---

## Hardware Prep (if using a dedicated mini‑PC) (10 min)

1. Power down; open the case.
2. Install the SSD/NVMe (e.g., 2TB) in the M.2 slot; secure the screw.
3. Reassemble and connect Ethernet (preferred) or be ready with a display/keyboard.

> If repurposing an existing machine, plan for a **fresh install**. Keep blockchain data on the internal drive if space allows; otherwise run pruned.

---

## Flash StartOS (20 min)

**You’ll need:** a USB drive (≥8GB), a laptop, and Balena Etcher.

1. **Download StartOS ISO** (verify you use the current stable release):

   * Releases: [https://github.com/Start9Labs/start-os/releases](https://github.com/Start9Labs/start-os/releases)
   * Example v0.3.5.1 ISO (x86_64): [https://github.com/Start9Labs/start-os/releases/tag/v0.3.5.1](https://github.com/Start9Labs/start-os/releases/tag/v0.3.5.1)
2. **Download Etcher:** [https://etcher.balena.io/](https://etcher.balena.io/)
3. **Flash the USB:**

   * Open Etcher → *Flash from file* → select the StartOS ISO → select target USB → *Flash* → wait for completion.

**Boot the node from USB**

* Insert the flashed USB into the mini‑PC.
* Enter BIOS/boot menu if needed; choose the USB drive.
* Follow on‑screen prompts to install StartOS to disk. When complete, remove the USB and reboot.

---

## Initial Setup & Trusting the CA (15 min)

1. Connect the node to your LAN (Ethernet recommended).
2. From a laptop on the **same Wi‑Fi or LAN network as the node**, visit `http://start.local` (or use the IP address if mDNS isn’t resolving).
3. Click **Reinstall** (for fresh setup) if prompted, then set an **owner password**.
4. Download the **Certificate Authority (CA)** bundle when prompted.
5. Install/Trust the CA on your laptop so your browser will trust the node’s HTTPS:

   * macOS guide: [https://docs.start9.com/0.3.5.x/device-guides/mac/ca-mac.html](https://docs.start9.com/0.3.5.x/device-guides/mac/ca-mac.html)
   * General getting started: [https://docs.start9.com/0.3.4.x/user-manual/getting-started/initial-setup](https://docs.start9.com/0.3.4.x/user-manual/getting-started/initial-setup)
6. After trusting the CA, reconnect to your node’s `.local` hostname or its `.onion` URL via Tor (as documented by Start9).

> If `start.local` doesn’t resolve, check Bonjour/mDNS support or navigate via the device’s LAN IP.

---

## Install Services: Bitcoin Core/Knots, electrs, Sparrow (20–25 min)

Inside StartOS:

1. **Install Bitcoin Core or Bitcoin Knots.** Start the service and begin initial block download (IBD). Choose **pruned** if disk is limited.
2. **Install electrs** (Electrum server) and point it at your Core/Knots instance.
3. On your laptop, install **Sparrow Wallet** ([https://sparrowwallet.com/](https://sparrowwallet.com/)) and configure **Server** → **Type: Electrum** → host = your node (LAN IP/hostname or Tor, with the correct port). Save and test connection.

**Notes**

* IBD can take many hours/days for archival; a pruned node begins usable operation earlier.
* For demo purposes, you can keep Core/Knots running and proceed with wallet connection while syncs continue; some features will be limited until headers/IBD progress sufficiently.

---

## Hands‑On: Send/Receive & Inspect (15 min)

1. In Sparrow, create or import a test wallet; write down the seed *offline*.
2. **Receive** a small amount (1–5k sats) from instructor treasury; label the transaction.
3. **Inspect** the mempool and confirmations using your own node (and compare with a public explorer): [https://mempool.space/](https://mempool.space/)
4. **Send** a small amount back; discuss fees (sats/vB), mempool backlog, and confirmation targets.

**Safety checklist**

* Two physical backups of the seed; no screenshots/cloud.
* Device lock; beware fake apps/QR phishing.
* Test restores with tiny funds before moving meaningful value.

---

## Troubleshooting

* `start.local` not found → use LAN IP; verify mDNS; check cable.
* Browser shows cert warning → CA not installed/trusted; repeat CA steps.
* electrs won’t index → wait for Core/Knots headers; confirm RPC/auth configuration.
* Sparrow cannot connect → verify host/port, firewall, Tor settings, and electrs status.

---

## Homework / Further Study

* Finish IBD

* Open port 8333 and verify peers

* Explore your node’s **logs**, peers, and disk usage; try pruned vs archival settings.

* Optional: install extra services (Mempool, BTCPay Server, JoinMarket, RoboSats) and learn their threat models.

### Reference Links

* StartOS flashing guides: [https://docs.start9.com/0.3.5.x/flashing-guides/](https://docs.start9.com/0.3.5.x/flashing-guides/)
* StartOS releases: [https://github.com/Start9Labs/start-os/releases](https://github.com/Start9Labs/start-os/releases)
* Initial setup (user manual): [https://docs.start9.com/0.3.4.x/user-manual/getting-started/initial-setup](https://docs.start9.com/0.3.4.x/user-manual/getting-started/initial-setup)
* macOS CA trust: [https://docs.start9.com/0.3.5.x/device-guides/mac/ca-mac.html](https://docs.start9.com/0.3.5.x/device-guides/mac/ca-mac.html)
* Balena Etcher: [https://etcher.balena.io/](https://etcher.balena.io/)
* Sparrow Wallet: [https://sparrowwallet.com/](https://sparrowwallet.com/)
* Mempool explorer: [https://mempool.space/](https://mempool.space/)
* Bitcoin Knots: [https://bitcoinknots.org/](https://bitcoinknots.org/)
* Bitcoin Core: [https://bitcoincore.org/](https://bitcoincore.org/)

---

## Instructor Notes 

* Target flow: intro (15) → install (20) → setup/CA (15) → services + Sparrow (25) → hands‑on (15) → Q&A (10).
* Bring a spare USB and a pre‑flashed StartOS stick for anyone stuck.
* If mempool is busy, pre‑fund a small LN channel for quick demos or warn about higher on‑chain fees.
* Consider screenshots/GIFs for each critical step in a future revision.


---

> 📅 **Looking for date/time/location?**  
> See the current [Event Page](./index.md)
