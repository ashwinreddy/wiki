A **topological space** is a [[set]] of points $X$ along with a $\tau \subseteq \mathscr{P}(X)$ ([[subset]] of the [[power set]]) whose elements are called **open sets** with
1. $\emptyset \in \tau, X \in \tau$
2. $U, V \in \tau \implies U \cap V \in \tau$
3. $U_\alpha \in \tau \implies \bigcup_{\alpha} U_\alpha \in \tau$

The elements of $\tau$ are called **open sets**

# Examples

Any $X$ admits the chaotic topology $\tau=\\{\emptyset, M\\}$ and the discrete topology $\mathscr{P}(M)$.

For $\RR^d$, the standard topology contains every set $U$ for which

$$
\forall p \in U: \exists r \in \RR^+: B_r(p) \subseteq U
$$

where $B_r(p)$ is the [[open ball]] of radius $r$ at $p$.