---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---


**Monte Carlo tree search (MCTS)** is a [[Monte Carlo algorithm]] (using averages from simulation roll outs) for [[tree]] search introduced in @coulom2006efficient.

> Monte Carlo Tree Search has one main purpose: given a game state to choose the most promising next move. -- [Monte Carlo Tree Search – beginners guide](https://int8.io/monte-carlo-tree-search-beginners-guide)

Consider a standard [[game tree]]. Let's define terms.

Playout/Simulation
: The approximate evaluation of a game tree node by running a game starting at that node, following the **rollout policy**, and ending at a terminal node from which the game result can be computed.

In MCTS, however, we focus only on **unvisited nodes**, i.e. nodes that have not yet been selected as the root for playout.[^caveat]

[^caveat]: N.B. this definition excludes a node visited during simulation from being a visited node.

Fully expanded node
: A node whose children have all been visited

**Backpropagation** is the traversal of the simulation result from a freshly visited node up to the root node, updating the **statistics** along the way. Every node $v$ gets a $Q(v)$ and a $N(v)$. $Q(v)$ is the **total simulation reward** and $N(v)$ is the total number of visits. Note that $Q_i$ is with respect to the player who moves at node $i$.

For a child node $v_i$ of a node $v$, the **upper confidence bound** is defined as

$$
\mathbb{UCT}(v_i, v) = \overbrace{\frac{Q(v_i)}{N(v_i)}}^{\text{exploitation component}} + \overbrace{ c \sqrt{ \frac{ \log N(v) }{ N(v_i) } } }^\text{exploration component}
$$

The exploitation component measures win ratio, the second gives a bonus for exploring states, and $c$ controls the weighting.

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