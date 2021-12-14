**Probabilistic graphical models (PGMs)** represent a [[joint probability distribution]] with a [[directed acyclic graph]]


---

are a way of representing probabilities with a [[graph]] with each vertex being a [[random variable]], and the edges representing a correlation or dependency.

[[https://ermongroup.github.io/cs228-notes/assets/img/naive-bayes.png|align=center]]

> Graphical representation of the Naive Bayes spam classification model. We can interpret the directed graph as indicating a story of how the data was generated: first, a spam/non-spam label was chosen at random; then a subset of $n$ possible English words were sampled independently and at random.

$$
P(X_1, \dots, X_n) = \prod_{i=1}^n P(X_i \mid \mathsf{parents}(X_i))
$$