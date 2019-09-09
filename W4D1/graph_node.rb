require 'set'

class GraphNode

  attr_accessor :value, :neighbors

  def initialize(value)
    @value = value
    @neighbors = []
  end

  def add_neighbor(neighbor)
    neighbors << neighbor
  end

end

def bfs(starting_node, target_value)

  visited = Set.new()
  queue = [starting_node]

  until queue.empty?
    node = queue.shift
    unless visited.include?(node)
      return node.value if node.value == target_value
      visited.add(node)
      queue.push(*node.neighbors)
    end
  end
  nil
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
  p bfs(a, 'b')
end
