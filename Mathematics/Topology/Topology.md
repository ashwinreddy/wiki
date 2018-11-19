A **topology** is the weakest structure that can be imposed upon a [[set]] to establish a notion of continuity. A topology on a set $M$ is an $\mathcal{O} \subseteq \mathscr{P}(M)$ ( $\mathcal{O}$ is a collection of subsets of $M$ ) if

1. $\emptyset \in \mathcal{O}$ and $M \in \mathcal{O}$ (The empty set and $M$ itself belong to $\mathcal{O}$)
2. $U, V \in \mathcal{O} \implies U \bigcap V \in \mathcal{O}$ (The intersection of any finite number of members still belongs to $\mathcal{O}$)
3. $U \in \mathcal{O} \implies \bigcup_{\alpha \in A} U_\alpha \in \mathcal{O}$ (Any arbitrary (finite or infinite) union of members still belongs to $\mathcal{O}$)

This defines a [[topological space]].

# Examples

The topology over $M$ consisting of $\\{M,\emptyset\\}$ is called the **chaotic topology**.

$\mathcal{O} = \mathscr{P}(M)$ is the **discrete topology** on $M$.

These are both kind of useless, but they are good pedagogical examples.

The standard topology over $M = \mathbb{R}^d$, denoted $\mathcal{O}_{\text{standard}}$, is constructed as follows:

1. Construct a [[Metric Space]] by picking a [[metric]], Euclidean norm will do.
2. $\forall x \in \mathbb{R}^d : \forall r \in \mathbb{R}^+$, define a **ball** of radius $r$ as 

\\[B_r(x) \equiv \\{y \in \mathbb{R}^d \vert d(x,y) < r\\}\\]

3. $U \in \mathcal{O}_{\text{standard}} : \iff \forall p \in U: \exists r \in \mathbb{R}^+ : B_r(p) \subseteq U$


# Inheriting a Topology

Suppose you've got an $M$ with a topology $\mathcal{O}_M$. For a subset $S \subseteq M$, can we inherit a subset from $\mathcal{O}_M$ in some meaningful way?


\\[
\mathcal{O}\vert_S \equiv \\{ U \cap S | U \in \mathcal{O}_M \\}
\\]

Inheriting the topology in this way allows one to make the following leap:

If a function is continuous from $M$ to $N$ for their topologies, then for any $S \subseteq M$, $f(S)$ is continuous.



