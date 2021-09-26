A **minimum spanning tree (MST)** is a [[tree]] $T = (V, E' \subseteq E)$ for an undirected [[graph]] $G = (V, E)$ with edge weights $w_e$ that minimizes

$$
\mathsf{weight}(T) = \sum_{e \in E'} w_e
$$

# Cut property

Suppose edges $X$ are part of a MST for graph $G = (V,E)$. Pick any subset of nodes $S$ for which $X$ does not cross between $S$ and $V \setminus S$ and let $e$ be the lightest edge across this partition. Then $X \cup \\{ e\\}$ is part of some MST.