---
bibliography: "Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**Variational Inverse Control with Events (VICE)** is an [[algorithm]], introduced in @fu2018variational that tries to do reward shaping using only given samples of desired goal states. In short, it is [[inverse reinforcement learning]] without the need for full demonstrations.

1. Engineering a reward function is hard.
2. It is easier to give examples of accomplishing the goal.
3. A natural way to describe a task is by asking that an event occur at some timestep, any timestep, or all timesteps.

The key insights are

1. Introducing an event-based control framework as an extension of [[control as inference]]. Then, the user's intent gets mapped to a query in the [[probabilistic graphical model]].
2. Learn event probabilities from data, similar to IRL.

# Event-based control

|Query|Formulation|Meaning|
|-----|-----------|-------|
|**ALL** query|$p(\tau \mid e_{1:T} = 1)$| Event should happen at each time step. |
|**AT** query|$p(\tau \mid e_{t^\*} = 1)$| Event should happen at a specific time $t^*$.|
|**ANY** query|$p(\tau  \mid e_1 = 1 \text{ or } e_2 = 1 \text{ or } \dots \text{ or } e_T = 1)$| Event should happen on at least one time step during each trial.|

The AT and ANY queries can be supervised with just a set of desired states. 



builds on inverse reinforcement learning to more limited forms of expert supervision, for example just showing desired goal states. It formulates [[MaxEnt IRL|maximum entropy inverse reinforcement learning]] as a [[GAN|generative adversarial networks]]-style problem.

|Component|Analog|Goal|
|---------|--------|----|
|Generator| $\pi(s, a)$ |Generate realistic $(s, a)$ pairs to fool the discriminator|
|Discriminator|$D_\theta(s, a)$|Distinguish expert and current policy $(s, a)$ pairs|


It does so using the [[control as inference]] perspective. This allows us to ask for the following:




1. Classifier training learns parameters to the [[Probabilistic Graph Model]].
2. Inferring the optimal actions results in policy optimization.

# Learn event probabilities from data

We want to learn the parameters $\theta$ to a model $p_\theta (s, a \mid e=1)$.

# Algorithm

1. Obtain examples of expert states and actions $s_i^E$, $a_i^E$
2. Initialize policy $\pi$ and binary discriminator $D_\theta$
3. Repeat $N$ times
    1. Sample rollouts of $\pi$
    2. Train $D_\theta$ via [[logistic regression]] to classify expert data from samples
    3. Update $\pi$ with respect to $p_\theta$ using the appropriate inference objective.

---