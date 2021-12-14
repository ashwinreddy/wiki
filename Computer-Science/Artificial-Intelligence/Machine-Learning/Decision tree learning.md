**Decision tree learning** uses training examples to generate a [[tree]] that can classify a test example. Typically, pick features or thresholds to minimize average [[entropy]] or average Gini impurity of each leaf.

A single tree has high [[variance]] so we use [[random forest]] (ensemble of trees). 

The deeper a decision tree, the more likely it is to overfit.

$$
\mathsf{InformationGain}(\textbf{node}) = H(S) - \frac{|S_\ell|H(S_\ell) + |S_r|H(S_r)}{|S_\ell| + |S_r|}
$$