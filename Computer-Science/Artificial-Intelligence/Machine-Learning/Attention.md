---
bibliography: "./Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Attention**. Think about a key-value-query system. We generate a query $q_t$ at every timestep, which comes from some query function $q(\cdot)$. We also have keys $k$ and values $v$ (that are static over time).

We compare the query to each key. That gives us scores for each key. We can [[softmax]] to get a probability distribution. Then, take that as a linear combination for the values.


# Papers

* @xu2016show
* @vaswani2017attention [[Transformer]]


---