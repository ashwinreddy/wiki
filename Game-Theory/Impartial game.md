An **impartial game** is a [[combinatorial game]] whose [[set]] of moves is independent of player. Chess is _not_ an impartial game since the players control mutually exclusive pieces.

# Subtraction

Starting with a pile of $x \in \mathbb{N}$ chips, two players alternate taking 1 to 4 chips. Removing the last chip is a win. Note that $B(x) = x$ since at least 1 chip is removed each step.

Suppose there are 5 chips. Then, player A cannot take the last chip, no matter what they do. Player B is guaranteed to win. If there are 6 chips, then player A can force a win by just taking 1 chip.

# Theorem

Suppose we're playing an impartial, progressively bounded combinatorial game. Let $N$ be the set of positions where the next player (the player who arrives at this state) can guarantee a win and $P$ the set of positions where the other player can guarantee a win, provided they play optimally:

$$
X = N \cup P.
$$

Simply put, someone has to be able to force a win.

If a state is $P$, it _must_ lead to a $N$ state. If a state is $N$, then it must lead to at least one winning strategy.