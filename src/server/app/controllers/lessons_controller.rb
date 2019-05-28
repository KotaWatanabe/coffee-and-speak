class LessonsController < ApplicationController

    def create
        # byebug
     
        @lesson = Lesson.new lesson_params
       
        @lesson.user = current_user
        @id = params[:teacher]
        @teacher = Teacher.find(@id)
        @lesson.teacher = @teacher
         if @lesson.save
            @lesson.request
            @lesson.save
            flash[:success] = "Registration successful!"
            redirect_to dashboard_user_path(current_user)
        else
            render :new
        end
    end

    def edit
    end
  
    def update
    #   if @lesson.update user_params
    #     flash[:success] = "Your profile was updated successfully!"
    #     redirect_to root_path
    #   else
    #     render :edit
    #   end

    end

    before_action :set_lesson, only: [:run, :stop, :resolve]

    # def request
    #   redirect_to lessons_path if @lesson.request!
    # end
  
    # def approve
    #   redirect_to calls_path if @call.approve!
    # end
  
    # def decline
    #   redirect_to calls_path if @call.decline!
    # end

    # def pay
    #   redirect_to calls_path if @call.pay!
    # end

    # def finish
    #   redirect_to calls_path if @call.finish!
    # end
  
    private
  
      def set_lesson
        @lesson = Lesson.find(params[:id])
      end

    def lesson_params
        params.permit(:comment)
    end
end
