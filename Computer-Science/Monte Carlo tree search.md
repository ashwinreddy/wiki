---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---


**Monte Carlo tree search (MCTS)** is a [[tree]] search algorithm using Monte-Carlo evaluation introduced in @coulom2006efficient.

> Monte Carlo Tree Search has one main purpose: given a game state to choose the most promising next move. -- [Monte Carlo Tree Search – beginners guide](https://int8.io/monte-carlo-tree-search-beginners-guide)

It is [[Monte Carlo algorithm]] in the sense that it simulate the game many times and predict the most promising move based on the results. Let's define some terms.

Playout/Simulation
: The approximate evaluation of a game tree node by running a game starting at that node, following the **rollout policy**, and ending at a terminal node, where the game result can be computed.

In MCTS, however, we only consider **unvisited nodes**. 

Visited node
: A node that was selected as the root for playout[^caveat]

[^caveat]: A node visited during simulation is not visited.

Fully expanded node
: A node whose children have all been visited

---