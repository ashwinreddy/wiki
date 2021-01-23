An **impartial game** is a [[combinatorial game]] whose [[set]] of moves is independent of player. Chess is _not_ an impartial game since the players control mutually exclusive pieces.

# N and P states

N state
: A position is an N state if a player starting there can ensure a win.

P state
: A position is a P state if the previous player can ensure a win.

# Theorem

Suppose we're playing an impartial, progressively bounded combinatorial game. Let $N$ be the set of positions where the next player (the player who arrives at this state) can guarantee a win and $P$ the set of positions where the other player can guarantee a win, provided they play optimally:

$$
X = N \cup P.
$$

Simply put, someone has to be able to force a win.

If a state is $P$, it _must_ lead to a $N$ state. If a state is $N$, then it must lead to at least one winning strategy.