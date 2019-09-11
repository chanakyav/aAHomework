# frozen_string_literal: true

class Simon
  COLORS = %w[red blue green yellow].freeze

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    take_turn until game_over
    if game_over
      game_over_message
      reset_game
    end
  end

  def take_turn
    show_sequence
    require_sequence
    unless game_over
      round_success_message unless game_over
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence; end

  def add_random_color
    index = rand(0...COLORS.length)
    seq << COLORS[index]
  end

  def round_success_message; end

  def game_over_message; end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
