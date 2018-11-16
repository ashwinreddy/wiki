A **topology** is the weakest structure that can be imposed upon a set to establish a notion of continuity.



# Mathematical Construction

A topology on a set $M$ is an $\mathcal{O} \subseteq \mathscr{P}(M)$ if

1. $\emptyset \in \mathcal{O}$ and $M \in \mathcal{O}$
2. $U, V \in \mathcal{O} \implies U \bigcap V \in \mathcal{O}$
3. $U \in \mathcal{O} \implies \bigcup_{\alpha \in A} U_\alpha \in \mathcal{O}$

# Topological Space

The pair $(M,\mathcal{O})$ is then called a **topological space**.

# Examples

The topology over $M$ consisting of $\\{M,\emptyset\\}$ is called the **chaotic topology**.

$\mathcal{O} = \mathscr{P}(M)$ is the **discrete topology** on $M$.

The standard topology over $M = \mathbb{R}^d$, denoted $\mathcal{O}_{\text{standard}}$, is constructed as follows:

1. Construct a [[Metric Space]] by picking a [[metric]], Euclidean norm will do.
2. \\[\forall x \in \mathbb{R}^d : \forall r \in \mathbb{R}^+$, define a **ball** of radius $r$ as $B_r(x) := \\{y \in \mathbb{R}^d \vert d(x,y) < r\\}\\]
3. $U \in \mathcal{O}_{\text{standard}} : \iff \forall p \in U: \exists r \in \mathbb{R}^+ : B_r(p) \subseteq U$


# Classifications

A subset $O \subseteq X$ is **open** if for every point $x \in O$, there is a ball around $x$ entirely contained in $O$.

$A\subseteq M$ is a closed set iff $M \setminus A \in \mathcal{O}$.

An open set does not imply a closed set. A closed set does not imply an open set.

# Continuity

Let $(M,\mathcal{O}_M)$ and $(N, \mathcal{O}_N)$ be topological spaces. Then a map $f: M \to N$ is continuous if $\forall V \in \mathcal{O}_N : \mathrm{preim}_f(V) \in \mathcal{O}_M.$

If $f$ and $g$ are continuous maps, $g\circ f$ is continuous.