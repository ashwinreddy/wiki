**Conditional independence** describes situations where an observation is is irrelevant. $A$ and $B$ are conditionally independent of some event $C$ if
$$
\mathbb{P}(A, B \mid C) = \mathbb{P}(A \mid C) \cdot \mathbb{P}(B \mid C).
$$

We write $A \perp\\!\\!\\!\perp B \mid C$.

# Example

A study shows that

$$
\Pr(\text{lactose intolerant} \mid \text{shorter than average}) \gg \mathbb{P}(\text{lactose intolerant})
$$

Does that mean lactose intolerance is caused by short height? No, because if you condition on the person being of Asian descent, then the data makes sense.