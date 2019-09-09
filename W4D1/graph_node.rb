class GraphNode

  attr_accessor :value, :neighbors

  def initialize(value)
    @value = value
    @neighbors = []
  end

  def bfs(starting_node, target_value)

    return starting_node if starting_node.value == target_value

    queue = [starting_node]

    unless queue.empty?

      node = queue.shift

      return node if node.value == target_value

      node.each { |neighbor| queue.push(neighbor) }

    end

  end

end


if __FILE__ == $PROGRAM_NAME
  a = GraphNode.new('a')
  b = GraphNode.new('b')
  c = GraphNode.new('c')
  d = GraphNode.new('d')
  e = GraphNode.new('e')
  f = GraphNode.new('f')
  a.neighbors = [b, c, e]
  c.neighbors = [b, d]
  e.neighbors = [a]
  f.neighbors = [e]
end
