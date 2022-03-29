The **forward algorithm** for a [[hidden markov model]].

[[https://rawgit.com/BerkeleyAI/cs188-hw-images/master/static/HMM_HW_1.png]]

Compute $P(X_t \mid e_1, \dots, e_t)$. Two steps

1. Predict. $$P(X_t \mid e_{1:t-1}) = \sum_{x_{t-1}} P(X_t \mid x_{t-1})P(x_{t-1} \mid e_{1:t-1})$$
2. Update. $$P(X_t \mid e_{1:t}) = \alpha P(e_t \mid X_t) P(X_t \mid e_{1:t-1}) $$