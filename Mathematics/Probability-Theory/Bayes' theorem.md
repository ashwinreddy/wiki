**Bayes' theorem / rule** is a fundamental theorem about [[conditional probability]]. 

> If events $A$ and $B$ have positive probability, then \begin{equation}\mathbb{P}(A \mid B) = \frac{ \mathbb{P}(B \mid A)\mathbb{P}(A) }{\mathbb{P}(B)}\end{equation}

Bayes tells you how to update your prior beliefs given new information. To be a Bayesian thinker is to be a detective. Before you see any evidence, you have a guess for the result. This is the **prior**. You then observe some evidence. Bayes' theorem says that your new belief in the hypothesis, known as the **posterior**, is proportional to the prior. The factor is the likelihood of seeing this evidence given the hypothesis divided by the probability you'd see this evidence anyway.

\begin{equation}
\frac{\text{Posterior}}{\text{Prior}} = \frac{\text{Likelihood}}{\text{Evidence}}
\end{equation}

We now consider how the posterior responds to each factor independently, _ceteris paribus_.

* When the prior increases or decreases, the posterior likewise increases or decreases. This is intuitive.
* When the probablity of seeing the evidence goes up, the posterior probability decreases. That means this event happens more frequently, so one should not be quick to infer much from it.
* When the probability of seeing the evidence goes down, the posterior probability increases. The event happens less frequently, so one can infer more from it.
* When the likelihood of the evidence given the hypothesis increases or decreases, the posterior responds the same. 


\begin{equation}
\Pr (\text{Hypothesis} \mid \text{Evidence}) = \frac{\Pr(\text{Evidence}\mid\text{Hypothesis})}{\Pr(\text{Evidence})}\Pr(\text{Hypothesis})
\end{equation}

This often requires you to compute $\Pr(\text{Evidence})$, which you can do by

$$
\Pr(\text{Evidence}) = \sum_{h \in \text{Hypothesis}} \Pr(\text{Evidence}\mid h) \Pr(h)
$$

# Proof

$$
\frac{\mathbb{P}(B \mid A) \mathbb{P}(A)}{\mathbb{P}(B)} = \frac{\mathbb{P}(A \cap B)}{\cancel{\mathbb{P}(A)}} \frac{\cancel{\mathbb{P}(A)}}{\mathbb{P}(B)} = \mathbb{P}(A \mid B)
$$

# Resources

* [[https://neilkakkar.com/Bayes-Theorem-Framework-for-Critical-Thinking.html]]