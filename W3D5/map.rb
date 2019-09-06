class Map

  def initialize
    @array = []
  end

  def set_key(key, value)
    index = array.index { |pair| pair[0] == key }
    if index
      array[index][1] = value
    else
      array.push([key, value])
    end
    value
  end

  def get_key(key)
    array.each { |pair| return pair[1] if pair[0] == key }
  end

  def delete(key)
    value = get_key(key)
    array.each { |pair| array.delete(pair) if pair[0] == key }
    value
  end

  def show
    deep_dup(array)
  end

  private
  attr_reader :array

  def deep_dup(arr)
    arr.map { |ele| ele.is_a?(Array) ? deep_dup(ele) : ele }
  end
end
