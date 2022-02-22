---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---


**Monte Carlo tree search (MCTS)** is a [[Monte Carlo algorithm]] (using averages from simulation roll outs) for [[tree]] search introduced in @coulom2006efficient.

> The focus of MCTS is on the analysis of the most promising moves, expanding the search tree based on random sampling of the search space.

Consider a standard [[game tree]]. Let's define terms.

Playout/Simulation
: The approximate evaluation of a game tree node by running a game starting at that node, following the **rollout policy**, and ending at a terminal node from which the game result can be computed.

In MCTS, however, we run playouts from **unvisited nodes**, i.e. nodes that have not yet been selected as the root for playout.[^caveat] So we simply find a node for which at least 1 child has not been visited and then run playout on one of them. Then we **backpropagate** the results up to the current tree root, along the way updating the **statistics** $Q(v)$ and $N(v)$ for each node. $Q(v)$ is the **total simulation reward**, and $N(v)$ is the total number of visits. Note that $Q_i$ is with respect to the player who moves at node $i$.

Suppose we follow this process from some node $r$. Then, we will have run a rollout from each of $r$'s children, and it will have been fully visited. 

> How do we navigate from a fully expanded node to an unvisited node? We have to go through layers of visited nodes.

Here, we pick the node with the highest **upper confidence bound (UCT)**, defined for a child node $v_i$ of node $v$ as

$$
\mathbb{UCT}(v_i, v) = \overbrace{\frac{Q(v_i)}{N(v_i)}}^{\text{exploitation component}} + \overbrace{ c P(v, v_i) \sqrt{ \frac{ \log N(v) }{ N(v_i) } } }^\text{exploration component}
$$

The exploitation component measures win ratio, the second gives a bonus for exploring states, and to control the weighting we have a constant $c$ and the prior probability from $v$ to $v_i$, supplied by the policy network in the case of AlphaGo/AlphaZero and assumed 1 in the original MCTS.

[[https://int8.io/wp-content/uploads/2018/03/exploration-uct.png]]

After running MCTS for as long as resources allow, you generally pick the node with highest $N(v)$ because it's value is estimated best and that value estimation must have been high to have been explored often.

# Pseudocode

```py
def monte_carlo_tree_search(root):
    while resources_left(time, computational power):
        leaf = traverse(root) # leaf = unvisited node 
        simulation_result = rollout(leaf)
        backpropagate(leaf, simulation_result)
    return best_child(root)

def traverse(node):
    while fully_expanded(node):
        node = best_uct(node)
    return pick_univisted(node.children) or node # in case no children are present / node is terminal 

def rollout(node):
    while non_terminal(node):
        node = rollout_policy(node)
    return result(node) 

def rollout_policy(node):
    return pick_random(node.children)

def backpropagate(node, result):
   if is_root(node) return 
   node.stats = update_stats(node, result) 
   backpropagate(node.parent)

def best_child(node):
    pick child with highest number of visits
```

---

[^caveat]: N.B. this definition excludes a node mereley visited during simulation from being a visited node.