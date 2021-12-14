**Probabilistic graphical models (PGMs)** aka **Belief Nets** or **Bayes Nets** represent a [[joint probability distribution]] $P$ with a [[directed acyclic graph]] $G$ with vertices $\\{X_i\\}_{i=1}^k$. The representation is enabled by


$$
p(x_1, \dots, x_k) = \prod_{i=1}^k P(X_i = x_i \mid \mathsf{parents}(X_i))
$$

---

are a way of representing probabilities with a [[graph]] with each vertex being a [[random variable]], and the edges representing a correlation or dependency.

[[https://ermongroup.github.io/cs228-notes/assets/img/naive-bayes.png|align=center]]

> Graphical representation of the Naive Bayes spam classification model. We can interpret the directed graph as indicating a story of how the data was generated: first, a spam/non-spam label was chosen at random; then a subset of $n$ possible English words were sampled independently and at random.
