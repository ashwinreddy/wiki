A **topology** is the weakest structure that can be imposed upon a set to establish a notion of continuity.

# Mathematical Construction

A topology on a set $M$ is an $\mathcal{O} \subseteq \mathscr{P}(M)$ if

1. $\emptyset \in \mathcal{O}$ and $M \in \mathcal{O}$
2. $U, V \in \mathcal{O} \implies \bigcap \\{U,V\\} \in \mathcal{O}$
3. $C \subseteq \mathcal{O} \implies \bigcup C \in \mathcal{O}$

The pair $(M,\mathcal{O})$ is then called a **topological space**.

# Examples

The topology over $M$ consisting of $\\{M,\emptyset\\}$ is called the **chaotic topology**.

$\mathcal{O} = \mathscr{P}(M)$ is the **discrete topology** on $M$.

The standard topology is constructed as 

If $M = \mathbb{R}^d$, $\mathcal{O}_{\text{standard}}$ is constructed as:
  
1. $\forall x \in \mathbb{R}^d : \forall r \in \mathbb{R}^+$, define $B_r(x) := \{y \in \mathbb{R}^d | \sqrt{\sum_{i=1}^d(y_i - x_i)^2} < r\}$
2. $U \in \mathcal{O}_{\text{standard}} : \iff \forall p \in U: \exists r \in \mathbb{R}^+ : B_r(p) \subseteq U$



[[Metric Space]]

A **ball** of radius $r$ around a point $x \in X$ is $B := \\{y \in X \vert d(x,y) < r\\}$

A subset $O \subseteq X$ is **open** if for every point $x \in O$, there is a ball around $x$ entirely contained in $O$.