A **Markov decision process (MDP)** describes an environment that provides rewards to an agent who can take actions to influence the environment. An MDP consists of a number of elements:

|Symbol|Object Type & Meaning|Notes|
|------|--------|------|
|$\mathcal{S}$|Set of states|
|$\mathcal{A}$|Set of actions|
|$P$|$\mathcal{S} \times \mathcal{A} \times \mathcal{S} \to [0,1]$| $P(s, a, s')=P(s' \vert s, a)$|

- A reward function $r: \mathcal{S} \times \mathcal{A}$
- An initial state distribution $p(s_0)$
- A discount factor $\gamma \in [0,1]$[^gamma]


Solving a MDP amounts to finding a "policy," that is a mapping from states to actions $\pi: \mathcal{S} \to \mathcal{A}$. 


[^gamma]: Unlike the rest of the elements,$\gamma$ is more a hyperparameter than inherently part of the environment.